import PostCard from "@/components/PostCard";
import ComposeBox from "@/components/ComposeBox";
import { prisma } from "@/lib/prisma";
import { mapDbPost } from "@/lib/map-posts";
import { Post } from "@/types";

export const dynamic = "force-dynamic"; // always fetch fresh, no static caching

export default async function Home() {
  const rows = await prisma.post.findMany({
    where: { parentId: null },
    orderBy: { createdAt: "desc" },
    include: {
      authorUser: true,
      authorCharacter: true,
      _count: { select: { replies: true, likes: true } },
    },
  });
  const posts = rows.map(mapDbPost);

  return (
    <div>
      <header className="sticky top-0 bg-white/80 backdrop-blur border-b border-gray-200 px-4 py-3 font-bold text-lg">
        Home
      </header>
      <ComposeBox />
      <div>
        {posts.length === 0 && (
          <p className="px-4 py-6 text-gray-500">No posts yet — say something.</p>
        )}
        {posts.map((post:Post) => (
          <PostCard key={post.id} post={post} />
        ))}
      </div>
    </div>
  );
}