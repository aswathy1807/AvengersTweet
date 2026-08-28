import PostCard from "@/components/PostCard";
import { prisma } from "@/lib/prisma";
import { mapDbPost } from "@/lib/map-posts";
import { notFound } from "next/navigation";

export const dynamic = "force-dynamic";

export default async function ThreadPage({ params }: { params: Promise<{ id: string }>; }) {
  const {id}=await params;
  const row = await prisma.post.findUnique({
    where: { id: id },
    include: {
      authorUser: true,
      authorCharacter: true,
      _count: { select: { replies: true, likes: true } },
      replies: {
        include: {
          authorUser: true,
          authorCharacter: true,
          _count: { select: { replies: true, likes: true } },
        },
        orderBy: { createdAt: "asc" },
      },
    },
  });

  if (!row) return notFound();

  const post = mapDbPost(row);
  const replies = row.replies.map(mapDbPost);

  return (
    <div>
      <header className="sticky top-0 bg-white/80 backdrop-blur border-b border-gray-200 px-4 py-3 font-bold text-lg">
        Post
      </header>

      <PostCard post={post} />

      <div className="border-b border-gray-200 px-4 py-2 text-sm text-gray-500">
        Replies
      </div>

      {replies.length === 0 && (
        <p className="px-4 py-6 text-gray-500">No replies yet.</p>
      )}
      {replies.map((reply) => (
        <PostCard key={reply.id} post={reply} />
      ))}
    </div>
  );
}