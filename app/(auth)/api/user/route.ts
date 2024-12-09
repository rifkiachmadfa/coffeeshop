
import { NextResponse } from "next/server";
import { db } from "@/lib/db";
import hash from 'bcrypt'

export async function POST(req : Request) {
    try {
        const body = await req.json()
        const { email, username, password }  = body;

        const existingUserByEmail = await db.user.findUnique({
            where : {email : email}
        });
        if (existingUserByEmail){
            return NextResponse.json ({user : null, message : "user with this email already exists"}, {status : 409})
        }

        const existingUserByUsername = await db.user.findUnique({
            where : {username : username}
        })
        if (existingUserByUsername){
            return NextResponse.json ({user : null, message : "user with this username already exists"}, {status : 409})
        }

        const  hashedPassword = await hash.hash(password, 10)
        const newUser = await db.user.create({
            data : {
                username,
                email,
                password : hashedPassword
            }
        })

        const {password : newUserPassword, ...rest} = newUser

        return NextResponse.json({user : rest, massage : "user created"}, {status : 201});
    } catch (error){
        console.error("Error creating user:", error);
        return NextResponse.json(
          { user: null, message: "Internal server error" },
          { status: 500 }
        )
    }
    
}