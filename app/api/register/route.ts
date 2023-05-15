import { prisma } from '@/lib/prisma'
import { hash } from 'bcrypt'
import { NextResponse } from 'next/server'

export async function POST(req: Request) {
  try {
    const { email, password, name, business_type, contact_number,location,business_name } = await req.json()
    const hashed = await hash(password, 12)

    const user = await prisma.user.create({
      data: {
        email,
        password: hashed,
        name,
        business_type,
        contact_number,
        location,
        business_name
      }
    })

    return NextResponse.json({
      user: {
        email: user.email,
        name: user.name,
        business_type: user.business_type,
        contact_number: user.contact_number,
        location:user.location,
        business_name:user.business_name
      }
    })
  } catch (err: any) {
    return new NextResponse(
      JSON.stringify({
        error: err.message
      }),
      {
        status: 500
      }
    )
  }
}
