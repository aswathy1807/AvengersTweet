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