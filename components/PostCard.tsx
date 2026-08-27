import {Post} from "@/types";
import Image from "next/image";
import Link from "next/link";

function timeAgo(iso:string):string{
    const diffMs=Date.now()-new Date(iso).getTime();
    const mins=Math.floor(diffMs/60000);
    if(mins<1)return"now";
    if(mins<60)return `${mins}m`;
    const hours=Math.floor(mins/60);
    if(hours<24)return `${hours}h`;
    return `${Math.floor(hours/24)}d`;
}

export default function PostCard({post}:{post:Post}){
    return(
        <article className="flex gap-3 border-b border-gray-200 px-4 py-3 hover:bg-gray-50 transition-colors">
            <Image
            src={post.author.avatar}
            alt={post.author.displayName}
            width={40}
            height={40}
            className="h-10 w-10 rounded-full bg-gray-200 shrink-0"
            />
            <div className="flex-1 min-w-0">
                <div className="flex items-center gap-1 text-sm">
                <span className="font-semibold text-gray-900">{post.author.displayName}</span>
                <span className="text-gray-500">@{post.author.username}</span>
                <span className="text-gray-400">·</span>
                <span className="text-gray-500">{timeAgo(post.createdAt)}</span>
            </div>
            
            <Link href={`/post/${post.id}`} className="block">
            <p className="mt-1 text-gray-900 whitespace-pre-wrap wrap-break-word">{post.content}</p>
            </Link>
            <div className="mt-3 flex gap-8 text-gray-500 text-sm max-w-xs">
                <button className="flex items-center gap-1 hover:text-blue-500">
                    💬<span>{post.replyCount}</span>
                </button>
                <button className="flex items-center gap-1 hover:text-red-500">
                    ❤️<span>{post.likeCount}</span>
                </button>
                <button className="flex items-center gap-1 hover:text-green-500">
                    🔄️<span>{post.repostCount}</span>
                </button>
            </div>
            </div>

        </article>
    );
}

