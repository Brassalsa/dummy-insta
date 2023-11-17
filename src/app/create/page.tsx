"use client";

import { UserContext } from "@/contexts/UserContext";
import { FormEvent, useContext, useState } from "react";
import Login from "../login/page";
import { PostContext } from "@/contexts/PostContext";
import { useRouter } from "next/navigation";

function CreatePost() {
  // states
  const [img, setImg] = useState("");
  const [desc, setDesc] = useState("");

  // contexts
  const { getUser } = useContext(UserContext);
  const { createPost } = useContext(PostContext);
  // router
  const router = useRouter();
  if (!getUser()) {
    return <Login />;
  }

  function handleSubmit(e: FormEvent) {
    e.preventDefault();
    createPost({ img, desc, author: getUser() });
    router.push("/");
  }

  return (
    <main className="h-full mt-3 w-[90%] sm:w-[70%] sm:pl-12 max-w-5xl sm:mx-auto">
      <h1 className="text-2xl font-bold w-full text-start">Create Post</h1>
      <form className="flex flex-col gap-3 mt-12" onSubmit={handleSubmit}>
        <label>Image Url</label>
        <input
          value={img}
          onChange={(e) => setImg(e.target.value)}
          className="bg-gray-700 rounded-md p-2 w-full"
          placeholder="www.example.com/xyz"
          type="url"
        />
        <label>Description</label>
        <textarea
          value={desc}
          onChange={(e) => setDesc(e.target.value)}
          className="bg-gray-700 rounded-md p-2 w-full"
          placeholder="Post Description..."
        />
        <button className="p-2 rounded-md bg-blue-900 w-max self-end hover:bg-blue-800 transition-all duration-300 active:bg-blue-950">
          Publish
        </button>
      </form>
    </main>
  );
}

export default CreatePost;
