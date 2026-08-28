import { mockCharacters } from "@/lib/mock-data";
import Image from "next/image";

const trending=[
    {topic: "#SuitUpgrade",postCount:1204},
    {topic: "#Brooklyn",postCount:856},
    {topic: "#AvengersAssemble",postCount:3201},

];

export default function ExplorePage(){
    return(
        <div>
            <header className="sticky top-0 bg-white/80 backdrop-blur border-b border-gray-200 px-4 py-3">
            <input
            type="text"
            placeholder="Search Status"
            className="w-full bg-gray-100 rounded-full px-4 py-2 focus:outline-none"
            disabled
            />
            </header>

            <div className="px-4 py-3 border-b border-gray-200 font-bold">Trending</div>
            {trending.map((t)=>(
                <div key={t.topic} className="px-4 py-3 border-b border-gray-200 hover:bg-gray-50">
                    <p className="font-semibold">{t.topic}</p>
                    <p className="text-sm text-gray-500">{t.postCount.toLocaleString()} posts</p>
                </div>

            ))}

            <div className="px-4 py-3 border-b border-gray-200 font-bold">Characters</div>
            {mockCharacters.map((c)=>(
                <div key={c.id} className="flex items-center gap-3 px-4 py-3 border-b border-gray-200 hover:bg-gray-50">
                   <Image
                   src={c.avatar} 
                   alt={c.displayName}
                   width={80}
                   height={80}
                   className="h-10 w-10 rounded-full bg-gray-200"/>

                   <div>
                    <p className="font-semibold">{c.displayName}</p>
                    <p className="text-sm text-gray-500">{c.username}</p>
                    </div> 
            </div>

            ))}
        </div>
    );
}