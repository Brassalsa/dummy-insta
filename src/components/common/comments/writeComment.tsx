"use client";

import { PostContext } from "@/contexts/PostContext";
import { UserContext } from "@/contexts/UserContext";
import { useContext, useState } from "react";

function WriteComment({ postId }: { onSubmit?: Function; postId: number }) {
  const { createComment } = useContext(PostContext);
  const { getUser } = useContext(UserContext);
  const [inp, setInp] = useState("");
  const user = getUser();
  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        if (user && inp) createComment(postId, inp, user);
        setInp("");
      }}
      className="px-4 flex gap-3 mt-4"
    >
      <input
        value={inp}
        onChange={(e) => setInp(e.target.value)}
        className="flex-1"
      />
      <button>Post</button>
    </form>
  );
}

export default WriteComment;
