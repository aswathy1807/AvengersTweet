import PostCard from "@/components/PostCard";
import { mockPosts, mockReply } from "@/lib/mock-data";
import { notFound } from "next/navigation";

export default function ThreadPage({ params }: { params: { id: string } }) {
  const post = mockPosts.find((p) => p.id === params.id);
  if (!post) return notFound();

  const replies = [mockReply].filter((r) => r.parentId === post.id);

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