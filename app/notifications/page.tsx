import { mockNotifications } from "@/lib/mock-data";
import Image from "next/image";

function label(n:(typeof mockNotifications)[number]){
    return n.type === "reply"?"replied to your post":"liked your post";
}

export default function NotificationsPage(){
    return(
        <div>
            <header className="sticky top-0 bg-white/80 backdrop-blur border-b border-gray-200 px-4 py-3 font-bold text-lg">
            Notifications
            </header>

        {mockNotifications.map((n)=>(
            <div
            key={n.id}
            className={`flex gap-3 px-4 py-3 border-b border-gray-200 ${
                n.read?"":"bg-blue-50"
            }`}
            >
                <Image
                src={n.actor.avatar}
                alt={n.actor.displayName}
                width={80}
                height={80}
                className="h-10 w-10 rounded-full bg-gray-200 shrink-0"
                />

                <div>
                    <p>
                        <span className="font-semibold">{n.actor.displayName}</span>{""}
                        <span className="text-gray-500">{label(n)}</span>
                    </p>

                    <p className="text-gray-500 text-sm mt-0.5">{n.postPreview}</p>
                    </div>
                </div>

        ))}
        </div>
    );
}
