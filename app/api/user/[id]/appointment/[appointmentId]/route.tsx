import { prisma } from "@/lib/prisma"
import { NextResponse } from "next/server"

export async function PATCH(
    request:Request, {params} : {params:{appointmentId:string}}) {
  
    const id = params.appointmentId
    const json = await request.json()
  
    const updated = await prisma.appointment.update({
        where:{
            id: Number(id)
        },
        data:json
    })
    return NextResponse.json(updated)
  } 

  export async function GET(request: Request, { params }: { params: { appointmentId: string } }) {
    const id = params.appointmentId;
    const user = await prisma.appointment.findUnique({
      where: {
        id: parseInt(id,10),
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