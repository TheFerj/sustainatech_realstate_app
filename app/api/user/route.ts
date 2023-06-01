import { prisma } from "@/lib/prisma"
import { NextResponse } from "next/server"



export async function GET(request: Request) {
    const users = await prisma.user.findMany();
    const modifiedUsers = users.map(user => {
        return {
            id:user.id,
            email:user.email,
            business_name:user.business_name,
            business_type:user.business_type,
            name: user.name,
            location: user.location,
            contact_number: user.contact_number
        };
    });
    return NextResponse.json(modifiedUsers);
}

export async function POST(request:Request){
    const  json = await request.json()

    const created = await prisma.user.create({
        data: json
    })
    return new NextResponse(JSON.stringify(created),{status:201})
}