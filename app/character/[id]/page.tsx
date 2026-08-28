import PostCard from "@/components/PostCard";
import { prisma } from "@/lib/prisma";
import { mapDbPost } from "@/lib/map-posts";
import { notFound } from "next/navigation";
import Image from "next/image";

export const dynamic = "force-dynamic";

export default async function CharacterProfilePage({
  params,
}: {
  params: Promise< { id: string }>;
}) {

    const {id}=await params;
  const character = await prisma.character.findUnique({ where: { slug: id } });
  if (!character) return notFound();

  const rows = await prisma.post.findMany({
    where: { authorCharacterId: character.id, parentId: null },
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
        {character.displayName}
      </header>

      <div className="h-32 bg-gray-200" />

      <div className="px-4 pt-3 pb-4 border-b border-gray-200">
        <Image
          src={character.avatar}
          alt={character.displayName}
          width={80}
          height={80}
          className="h-20 w-20 rounded-full border-4 border-white -mt-14 bg-gray-300"
        />
        <h1 className="mt-2 text-xl font-bold">{character.displayName}</h1>
        <p className="text-gray-500">{character.username}</p>
        <p className="mt-2 text-gray-900">{character.bio}</p>
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