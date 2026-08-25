import PostCard from "@/components/PostCard";
import ComposeBox from "@/components/ComposeBox";
import {mockPosts} from "@/lib/mock-data";

export default function Home() {
  return (
    <div>
      <header className="sticky top-0 bg-white/80 backdrop-blur-border-b border-gray-200 px-4 py-3 font-bold text-lg">
        Home
      </header>
      <ComposeBox />
      <div>
      {mockPosts.map((post) => (
        <PostCard key={post.id} post={post} />
      ))}
    </div>
  </div>
  );
}
      