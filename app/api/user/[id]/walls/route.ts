import { prisma } from '@/lib/prisma'
import { NextResponse } from 'next/server'

export async function GET(request: Request, { params }: { params: { id: string } }) {
  const email = params.id;
  const user = await prisma.walls.findMany({});

  const headers = new Headers();
  headers.append('Cache-Control', 'no-cache'); // Add cache control header to disable caching

  return new Response(JSON.stringify(user), {
    headers,
    status: 200,
    statusText: 'OK',
  });
}

// export async function GET(request: Request, { params }: { params: { id: string } }) {
//   const id = params.id;
//   const post = await prisma.post.findMany({
//     where: {
//       userId: Number(id)
//     },
//   });
//   const headers = new Headers();
//     headers.append('Cache-Control', 'no-cache'); // Add cache control header to disable caching
  
//     return new Response(JSON.stringify(post), {
//       headers,
//       status: 200,
//       statusText: 'OK',
//     });
// }

export async function POST(
  request: Request,
  { }: { params: { id: string } }
) {
  const json = await request.json()

  const created = await prisma.walls.create({
    data: {
      ...json,
    }
  })

  return new NextResponse(JSON.stringify(created), { status: 201 })
}