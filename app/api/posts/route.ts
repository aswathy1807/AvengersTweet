import {NextRequest,NextResponse} from "next/server";
import {prisma} from "@/lib/prisma";

export async function GET(){
    const posts=await prisma.post.findMany({
        where:{parentId:null},
        orderBy:{createdAt:"desc"},
        include:{
            authorUser:true,
            authorCharacter:true,
            _count:{select:{replies:true,likes:true}},
        },
    });

    return NextResponse.json(posts);
}

export async function POST(req:NextRequest){
    const body=await req.json();
    const content=(body.content??"").trim();

    if(!content){
        return NextResponse.json({error:"Content is required"},{status:400});
    }
    if(content.length>280){
        return NextResponse.json({error:"Content exceeds 280 charaters"},{status:400});

    }

    const user=await prisma.user.findUnique({where:{username:"violet"}});
    if(!user){
        return NextResponse.json({error:"seeded user not found- did you run prisma db seed?"},{status:500});
    }

    const post = await prisma.post.create({
        data:{
            content,
            authorUserId:user.id,
            parentId:body.parentId??null,

        },
        include:{authorUser:true,authorCharacter:true},

        
    });
    return NextResponse.json(post,{status:201});
}

