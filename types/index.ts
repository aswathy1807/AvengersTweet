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