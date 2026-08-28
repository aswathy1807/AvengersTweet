export type AuthorType="user"|"character";

export interface Author {
    id: string;
    type: AuthorType;
    displayName: string;
    username:string;
    avatar:string;
}

export interface Post {
    id: string;
    author:Author;
    content: string;
    createdAt: string;
    replyCount: number;
    likeCount: number;
    repostCount: number;
    parentId?:string;
}

export interface DbPost {
  id: string;
  content: string;
  createdAt: string | Date;
  parentId: string | null;
  authorUser: { id: string; displayName: string; username: string; avatar: string } | null;
  authorCharacter: { id: string; slug: string; displayName: string; username: string; avatar: string } | null;
  _count?: { replies: number; likes: number };
}