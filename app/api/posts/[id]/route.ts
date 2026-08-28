import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

export async function GET(_req: Request, { params }: { params: { id: string } }) {
  const post = await prisma.post.findUnique({
    where: { id: params.id },
    orderBy: { createdAt: "asc" },
    include: {
      authorUser: true,
      authorCharacter: true,
      _count: { select: { replies: true, likes: true } },
    },
      replies: {
        include: { authorUser: true,
                   authorCharacter: true,
                   _count:{select:{replies:true,likes:true}},
        
      },
    },
  });

  if (!post) {
    return NextResponse.json({ error: "Not found" }, { status: 404 });
  }

  return NextResponse.json(post);
}