import { prisma } from "@/lib/prisma"
import { NextResponse } from "next/server"



export async function GET(request: Request, { params }: { params: { id: string } }) {
    const email = params.id;
    const user = await prisma.user.findUnique({
      where: {
        email: email,
      },
    });
  
    const headers = new Headers();
    headers.append('Cache-Control', 'no-cache'); // Add cache control header to disable caching
  
    return new Response(JSON.stringify(user), {
      headers,
      status: 200,
      statusText: 'OK',
    });
  }
  

export async function PUT(
    request:Request, {params} : {params:{id:string}}) {

    const id = params.id
    const json = await request.json()

    const updated = await prisma.user.update({
        where:{
            id: parseInt(id,10)
        },
        data:json
    })
    return NextResponse.json(updated)
}

export async function PATCH(
    request:Request, {params} : {params:{id:string}}) {

    const id = params.id
    const json = await request.json()

    const updated = await prisma.user.update({
        where:{
            id: parseInt(id,10)
        },
        data:json
    })
    return NextResponse.json(updated)
}

export async function DELETE(
    request:Request, {params} : {params:{id:string}}) {

    const id = params.id

    const deleted = await prisma.user.delete({
        where:{
            id: parseInt(id,10)
        },
    })
    return NextResponse.json(deleted)
}