import { PostType, PostCommentType, UserType } from "@/types/post/post";

export const Users: UserType[] = [
  {
    id: 0,
    name: "dummy",
    email: "user@dummy.com",
  },
];

export const Comments: PostCommentType[] = [
  {
    id: 0,
    comment: "Fetched from unsplash",
    author: Users[0],
  },
];

export const Posts: PostType[] = [
  {
    id: 0,
    image:
      "https://images.unsplash.com/photo-1682687219570-4c596363fd96?q=80&w=1075&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    description: "In the Wild Sunset",
    author: Users[0],
    likes: 0,
    comments: [Comments[0]],
  },
];
