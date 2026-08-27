import {Post,Author} from "@/types";

const tony: Author={
    id:"tony",
    type:"character",
    displayName:"Tony Stark",
    username:"IronMan",
    avatar:"/avatars/tony.jpg"
};

const steve:Author={
    id:"steve",
    type:"character",
    displayName:"Steve Rogers",
    username:"CapAmerica",
    avatar:"/avatars/steve.jpg"
};

const user:Author={
    id:"user-1",
    type:"user",
    displayName:"Violet",
    username:"Violet",
    avatar:"/avatars/user.jpg"
};

export const mockPosts:Post[]=[
    {
        id:"1",
        author:tony,
        content:"Just upgraded the suit again.Don't ask how much it cost.",
        createdAt:new Date(Date.now()-1000*60*5).toISOString(),
        replyCount:3,
        likeCount:42,
        repostCount:5,
    },

    {
        id:"2",
        author:steve,
        content:"I can do this all day.",
        createdAt:new Date(Date.now()-1000*60*30).toISOString(),
        replyCount:8,
        likeCount:120,
        repostCount:20,

    },

    {
        id:"3",
        author:user,
        content:"who would win in a fight, Thor or me guys?",
        createdAt:new Date(Date.now()-1000*60*60).toISOString(),
        replyCount:15,
        likeCount:200,
        repostCount:30,
    },
  
];

export interface CharacterProfile extends Author{
    bio:string;
    followersCount:number;
    followingCount:number;
}

export const mockCharacters:CharacterProfile[]=[
    {
        ...tony,
        bio:"Genius, billionaire, playboy, philanthropist. CEO,Stark Industries.",
        followersCount:2400000,
        followingCount:12,
    },

    {
        ...steve,
        bio:"I can do this all day. Captain America, First Avenger.",
        followersCount:1800000,
        followingCount:8,
    },

];

export const mockReply:Post={
    id:"2-reply-1",
    author:tony,
    content:"cute speech. Who's paying for the shield upgrades though?",
    createdAt:new Date(Date.now()-1000*60*20).toISOString(),
    replyCount:0,
    likeCount:10,
    repostCount:1,
    parentId:"2",
};

export interface MockNotification{
    id:string;
    type:"reply"|"like";
    actor:Author;
    postPreview:string;
    createdAt:string;
    read:boolean;
}

export const mockNotifications:MockNotification[]=[
    {
        id:"n1",
        type:"reply",
        actor:tony,
        postPreview:"cute speech. Who's paying for the shield upgrades though?",
        createdAt:new Date(Date.now()-1000*60*20).toISOString(),
        read:false,

    },

    {
        id:"n2",
        type:"like",
        actor:steve,
        postPreview:"whos winning, thor or a very large storm",
        createdAt:new Date(Date.now()-1000*60*45).toISOString(),
        read:true,
    },
];