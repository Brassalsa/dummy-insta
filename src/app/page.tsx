"use client";

import PostList from "@/components/common/postList/PostList";
import { PostContext } from "@/contexts/PostContext";
import { UserContext } from "@/contexts/UserContext";
import { useContext } from "react";
import Login from "./login/page";

export default function Home() {
  const { getPosts } = useContext(PostContext);
  const { getUser } = useContext(UserContext);
  if (!getUser()) {
    return <Login />;
  }
  return (
    <main className="h-full w-[95%] sm:w-[70%] justify-self-center self-center sm:mx-auto">
      <PostList list={getPosts()} />
    </main>
  );
}
