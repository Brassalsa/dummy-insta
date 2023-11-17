import { PostType } from "@/types/post/post";
import Image from "next/image";
import { useContext, useState } from "react";

import { FiHeart, FiMessageCircle, FiSend, FiBookmark } from "react-icons/fi";
import Comments from "../comments/Comments";
import { PostContext } from "@/contexts/PostContext";

function Post({ post }: { post: PostType }) {
  const { toggleLike } = useContext(PostContext);
  // states
  const [likes, setLikes] = useState(post.likes || 0);
  const [isSaved, setSaved] = useState(false);
  const [commentsState, setCommentsState] = useState(false);
  return (
    <div className="w-full flex flex-col gap-4 justify-center max-w-xl mx-auto my-6 border-b border-gray-700 py-2">
      <div className="flex gap-2 relative">
        <div className="rounded-[100%] w-10 h-10 relative overflow-hidden">
          <Image
            fill
            src="/img/img.jpg"
            alt="user img"
            className="object-cover"
          />
        </div>
        <span>{post.author.name}</span>
      </div>
      <div className="h-80 w-full  max-h-96 relative self-center">
        <Image
          src={post.image}
          alt="post image"
          sizes="80vw"
          fill
          className="relative object-contain"
        />
      </div>
      <div className="flex gap-6 text-2xl w-full relative">
        <FiHeart
          className={post.isLiked && "fill-red-500 stroke-red-400"}
          onClick={(e: Event) => {
            toggleLike(post.id);
          }}
        />
        <FiMessageCircle
          onClick={(e: Event) => {
            setCommentsState((commentState) => !commentState);
          }}
        />
        <FiSend />
        <FiBookmark
          className={
            "absolute right-1 " + (isSaved && " fill-white stroke-white")
          }
          onClick={(e: Event) => {
            setSaved((saved) => !saved);
          }}
        />
      </div>
      <div>
        {post.likes} Likes{" "}
        <span className="text-gray-400 text-sm">
          {post.comments.length} Comments
        </span>
      </div>
      <div>{post.description}</div>
      {commentsState && (
        <Comments
          comments={post.comments}
          setCommentsState={setCommentsState}
          postId={post.id}
        />
      )}
    </div>
  );
}

export default Post;
