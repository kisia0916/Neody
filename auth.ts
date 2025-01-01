import NextAuth from "next-auth"
import Google from "next-auth/providers/google"
import * as jwt from "jsonwebtoken"
 
export const { auth, handlers, signIn, signOut } = NextAuth({
  providers: [Google],
  session:{
    strategy:"jwt"
  },
  callbacks:{
    async signIn({user}){
      const jwtSecret = process.env.AUTH_SECRET as string
      const options = {
        expiresIn:"1h"
      }
      const token = jwt.sign(user,jwtSecret,options)
      const res = await fetch("http://localhost:3000/api/user/signin",{
        method:"POST",
        headers:{
          "Content-type":"application/json"
        },
        body:JSON.stringify({token:token})
      })
      //ここでユーザー情報からjwtを生成、↑のエンドポイントでjwtの検証
      return true
    }
  }
})



