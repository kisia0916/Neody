import { prisma } from "@/lib/db"
import { Prisma } from "@prisma/client"
import { sign, verify, TokenExpiredError, JsonWebTokenError,JwtPayload} from "jsonwebtoken";
import { NextRequest, NextResponse } from "next/server"
import { number, string, z } from "zod"

const body_schema = z.object({
    token:z.string()
})
const user_schema = z.object({
    id:string(),
    name:string(),
    email:string(),
    image:string(),
    iat:number(),
    exp:number()
})

type body_type = z.infer<typeof body_schema> 
type user_type = z.infer<typeof user_schema>

export async function POST(req:NextRequest):Promise<NextResponse> {
    try{
        const body:body_type = await req.json()
        body_schema.parse(body)
        //jwt検証
        const decoded_data:string|JwtPayload = await verify(body.token,process.env.AUTH_SECRET as string)
        if (decoded_data){
            const user_data:user_type = user_schema.parse(decoded_data)
            //ユーザーが存在するか確認。
            const find_user_result = await prisma.user.findMany({
                where:{
                    email:user_data.email
                }
            })
            if (find_user_result){
                return NextResponse.json({type:"signin",data:find_user_result},{status:200})
            }else{
                return NextResponse.json({type:"signup",data:""},{status:200})
            }
        }
        return NextResponse.json({"message":"token decode error"},{status:200})
    }catch (error){
        if (error instanceof z.ZodError){
            return NextResponse.json({"message":"validation error"},{status:500})
        }else if (error instanceof TokenExpiredError){
            return NextResponse.json({"message":"validation error"},{status:500})
        }else if (error instanceof JsonWebTokenError){
            return NextResponse.json({"message":"validation error"},{status:500})
        }
        return NextResponse.json({"message":"server error"},{status:500})
    }
}