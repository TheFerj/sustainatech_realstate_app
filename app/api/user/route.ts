import { prisma } from '@/lib/prisma'
import { NextResponse } from 'next/server'

export async function GET(req: any) {
  try {
    const { email } = req.query;

    const user = await prisma.user.findUnique({
      where: {
        email,
      },
    });

    if (!user) {
      return new NextResponse(
        JSON.stringify({
          error: 'User not found',
        }),
        {
          status: 404,
        }
      );
    }

    return NextResponse.json({
      user: {
        email: user.email,
        name: user.name,
        business_type: user.business_type,
        contact_number: user.contact_number,
        location: user.location,
        business_name: user.business_name,
      },
    });
  } catch (err: any) {
    return new NextResponse(
      JSON.stringify({
        error: err.message,
      }),
      {
        status: 500,
      }
    );
  }
}
