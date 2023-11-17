import { PostCommentType } from "@/types/post/post";

import { Dispatch, SetStateAction } from "react";
import SingleComment from "./singleComment";
import WriteComment from "./writeComment";

function Comments({
  comments,
  setCommentsState,
  postId,
}: {
  comments: PostCommentType[] | undefined;
  setCommentsState: Dispatch<SetStateAction<boolean>>;
  postId: number;
}) {
  return (
    <div
      className="fixed z-30 top-0 bottom-0 right-0 left-0 bg-black/50 flex flex-col gap-3 justify-start items-center py-1"
      onClick={(e) => setCommentsState(false)}
    >
      <div
        className="h-[50%]  w-[70%] max-w-2xl bg-black p-2"
        onClick={(e) => e.stopPropagation()}
      >
        <span className="text-lg">Comments</span>
        <div className="overflow-y-scroll h-3/4">
          {comments?.map((i) => (
            <SingleComment comment={i} />
          ))}
        </div>
        <WriteComment postId={postId} />
      </div>
    </div>
  );
}

export default Comments;
