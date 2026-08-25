"use client";

import Image from "next/image";
import {useState} from "react";

const MAX_CHARS=280;

export default function ComposeBox(){
    const[text,setText]=useState("");
    const remaining =MAX_CHARS-text.length;
    const overLimit=remaining<0;

    return(
        <div className="border-b border-gray-200 px-4 py-3">
            <div className="flex gap-3">
                <Image
                src="/avatars/user.jpg"
                alt="You"
                width={40}
                height={40}
                className="h-10 w-10 rounded-full bg-gray-200 shrink-0"/>

               <div className="flex-1">
                <textarea
                value={text}
                onChange={(e)=>setText(e.target.value)}
                placeholder="What's happening?"
                rows={3}
                className="w-full resize-none text-lg placeholder-gray-400 focus:outline-none"
                />
                <div className="flex items-center justify-end gap-3 mt-2">
                    <span 
                    className={`text-sm ${overLimit?"text-red-500":"text-gray-400"}`}
                    >
                        {remaining}
                        </span>
                        <button
                        disabled={text.trim().length==0||overLimit}
                        className="bg-blue-500-text-white font-semibold px-4 py-1.5 rounded-full disabled:opacity-40 disabled:cursor-not-allowed *:hover:bg-blue-600 transition-colors"
                        onClick={()=>{
                            console.log("Post clicked:",text);
                            setText("");

                        }}
                        >
                        Post
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}


