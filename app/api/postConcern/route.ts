import { prisma } from '@/lib/prisma';
import { NextResponse } from 'next/server';

export async function POST(req: Request) {
  try {
    const { title, content, urgency, userId } = await req.json();
    
    const post = await prisma.post.create({
      data: {
        title,
        content,
        createdAt: new Date(),
        urgency,
        user: userId, // Connect the post to the specified user
      },
    });

    return NextResponse.json({
      post: {
        id: post.id,
        title: post.title,
        content: post.content,
        createdAt: post.createdAt,
        urgency: post.urgency,
        userId: post.userId,
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