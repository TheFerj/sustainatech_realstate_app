import { prisma } from '@/lib/prisma'
import { NextResponse } from 'next/server'

export async function GET(request: Request, { params }: { params: { id: string } }) {
  const email = params.id;
  const user = await prisma.appointment.findMany({});

  const headers = new Headers();
  headers.append('Cache-Control', 'no-cache'); // Add cache control header to disable caching

  return new Response(JSON.stringify(user), {
    headers,
    status: 200,
    statusText: 'OK',
  });
}

export async function POST(
  request: Request,
  { }: { params: { id: string } }
) {
  const json = await request.json()

  const created = await prisma.appointment.create({
    data: {
      ...json,
    }
  })

  return new NextResponse(JSON.stringify(created), { status: 201 })
}

export async function PATCH(
  request:Request, {params} : {params:{id:number}}) {

  const id = params.id
  const json = await request.json()

  const updated = await prisma.appointment.update({
      where:{
          id: id
      },
      data:json
  })
  return NextResponse.json(updated)
}