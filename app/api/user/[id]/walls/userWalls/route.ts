import { prisma } from '@/lib/prisma'
import { NextResponse } from 'next/server'

export async function GET(request: Request, { params }: { params: { id: string } }) {
    const id = params.id;
    const post = await prisma.walls.findMany({
      where: {
        userId: parseInt(id,10)
      },
    });
    const headers = new Headers();
      headers.append('Cache-Control', 'no-cache'); // Add cache control header to disable caching
    
      return new Response(JSON.stringify(post), {
        headers,
        status: 200,
        statusText: 'OK',
      });
  }
