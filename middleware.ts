import { auth } from "@/auth"
import { NextRequest, NextResponse } from "next/server"

export async function middleware(request:NextRequest){
    const session = await auth()
    if (!session){
        const url = request.nextUrl.clone()
        url.pathname = "/signin"
        return NextResponse.redirect(url)
    }
}

export const config = {
    matcher:["/","/profile/:path*","/timer","/ranking"]
}