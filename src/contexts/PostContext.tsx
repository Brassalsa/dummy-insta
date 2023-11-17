"use client";

import { PostCommentType, PostType, UserType } from "@/types/post/post";
import { ReactNode, createContext, useEffect, useState } from "react";

interface PostContextType {
  getPosts: () => PostType[];
  createPost: (props: CreatePostType) => boolean;
  toggleLike: (id: number) => any;
  createComment: (id: number, data: string, author: UserType) => any;
}

interface CreatePostType {
  img: string;
  desc: string;
  author: UserType | undefined;
}

export const PostContext = createContext<PostContextType>({
  getPosts: () => [],
  createPost: ({}: Partial<CreatePostType>) => false,
  toggleLike: () => undefined,
  createComment: () => undefined,
});

export default function PostContextProvider({
  children,
}: {
  children: ReactNode;
}) {
  const [posts, setPosts] = useState<PostType[]>([]);

  useEffect(() => {
    const getData = async () => {
      const res = await fetch("/api/post");
      if (!res.ok) {
        return;
      }
      setPosts(await res.json());
    };
    getData();
  }, []);

  // get posts
  function getPosts() {
    return posts;
  }
  // create post
  function createPost({ img, desc, author }: CreatePostType) {
    const newPosts = [...posts];
    if (!author) return false;
    const post: PostType = {
      id: Math.trunc(Math.random() * 10000),
      image: img,
      description: desc,
      likes: 0,
      comments: [],
      isLiked: false,
      author,
    };
    newPosts.unshift(post);
    setPosts(newPosts);
    return true;
  }

  // likes
  function toggleLike(id: number) {
    const newPosts = posts.map((i) => {
      if (i.id == id) {
        if (!i.isLiked) {
          i.likes += 1;
        } else {
          if (i.likes > 0) i.likes -= 1;
        }
        i.isLiked = !i.isLiked;
      }
      return i;
    });
    setPosts(newPosts);
  }

  // create Comment
  function createComment(id: number, data: string, author: UserType) {
    if (!author) return;
    const comment: PostCommentType = {
      id: Math.trunc(Math.random() * 10000),
      comment: data,
      author,
    };
    const newPosts = posts.map((i) => {
      if (i.id == id) {
        i.comments.unshift(comment);
      }
      return i;
    });
    setPosts(newPosts);
  }

  return (
    <PostContext.Provider
      value={{
        getPosts,
        createPost,
        toggleLike,
        createComment,
      }}
    >
      {children}
    </PostContext.Provider>
  );
}
