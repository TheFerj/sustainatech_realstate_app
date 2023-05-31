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