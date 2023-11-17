"use client";

import { UserContext } from "@/contexts/UserContext";
import { useContext, useEffect, useState } from "react";
import Login from "../login/page";
import Image from "next/image";
import { PostContext } from "@/contexts/PostContext";
import PostList from "@/components/common/postList/PostList";
import { PostType } from "@/types/post/post";

function Account() {
  const { getUser, createUser } = useContext(UserContext);
  const [userPosts, setUserPosts] = useState<PostType[]>([]);
  const user = getUser();

  const { getPosts } = useContext(PostContext);

  useEffect(() => {
    const userPosts = getPosts().filter((post) => post.author.id == user?.id);
    setUserPosts(userPosts);
  }, []);

  function handleLogout() {
    createUser();
  }
  if (!user) {
    return <Login />;
  }
  return (
    <main className="w-[85%] sm:w-[70%] sm:ml-14 h-full flex flex-col gap-3 mx-auto sm:mx-2">
      <div className="flex gap-2 w-full mt-4 justify-start flex-wrap relative">
        <Image
          src={"/img/img.jpg"}
          width={100}
          height={100}
          alt="user image"
          className="rounded-full aspect-[1/1] object-cover"
        />
        <span className="text-2xl font-semibold">{user.name}</span>
        <button
          className="p-2 bg-red-500 rounded-md h-max right-1 absolute"
          onClick={handleLogout}
        >
          Logout
        </button>
      </div>
      <div>
        <h1 className="text-xl">{userPosts.length} Posts</h1>
        <PostList list={userPosts} />
      </div>
    </main>
  );
}

export default Account;
