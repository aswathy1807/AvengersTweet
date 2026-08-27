import PostCard from "@/components/PostCard";
import { mockPosts } from "@/lib/mock-data";
import Image from "next/image";

export default function UserProfilePage() {
  const posts = mockPosts.filter((p) => p.author.type === "user");

  return (
    <div>
      <header className="sticky top-0 bg-white/80 backdrop-blur border-b border-gray-200 px-4 py-3 font-bold text-lg">
        Your Profile
      </header>

      <div className="h-32 bg-gray-200" />

      <div className="px-4 pt-3 pb-4 border-b border-gray-200">
        <Image
          src="/avatars/user.png"
          alt="You"
          className="h-20 w-20 rounded-full border-4 border-white -mt-14 bg-gray-300"
        />
        <h1 className="mt-2 text-xl font-bold">You</h1>
        <p className="text-gray-500">@you</p>
      </div>

      <div>
        {posts.length === 0 && (
          <p className="px-4 py-6 text-gray-500">No posts yet.</p>
        )}
        {posts.map((post) => (
          <PostCard key={post.id} post={post} />
        ))}
      </div>
    </div>
  );
}