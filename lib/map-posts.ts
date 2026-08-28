import { DbPost, Post } from "@/types";

export function mapDbPost(row: DbPost): Post {
  const author = row.authorUser
    ? {
        id: row.authorUser.id,
        type: "user" as const,
        displayName: row.authorUser.displayName,
        username: row.authorUser.username,
        avatar: row.authorUser.avatar,
      }
    : {
        id: row.authorCharacter!.id,
        type: "character" as const,
        displayName: row.authorCharacter!.displayName,
        username: row.authorCharacter!.username,
        avatar: row.authorCharacter!.avatar,
      };

  return {
    id: row.id,
    author,
    content: row.content,
    createdAt: new Date(row.createdAt).toISOString(),
    replyCount: row._count?.replies ?? 0,
    likeCount: row._count?.likes ?? 0,
    repostCount: 0, 
    parentId: row.parentId ?? undefined,
  };
}