import { Prisma } from "@prisma/client"
import * as jwt from "jsonwebtoken"
import { NextRequest, NextResponse } from "next/server"
import { string, z } from "zod"

const body_schema = z.object({
    token:z.string()
})
const user_schema = z.object({
    id:string(),
    name:string(),
    email:string(),
    image:string()
})

type body_type = z.infer<typeof body_schema>

export async function POST(req:NextRequest):Promise<NextResponse> {
    try{
        const body:body_type = await req.json()
        body_schema.parse(body)
        //jwt検証
        let user_data
        jwt.verify(body.token,process.env.AUTH_SECRET as string,(error,decode)=>{
            if (error){
                return NextResponse.json({"message":"auth error"},{status:200})
            }else{
                user_data = decode
            }
        })
        user_schema.parse(user_data)
        //ユーザーが存在すればそのデータを返し、無ければ新規作成
        const result = await 
        return NextResponse.json({"data":""},{status:200})
    }catch (error){
        if (error instanceof z.ZodError){
            return NextResponse.json({"message":"validation error"},{status:500})
        }
        return NextResponse.json({"message":"server error"},{status:500})
    }
}