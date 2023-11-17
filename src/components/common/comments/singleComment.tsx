import { PostCommentType } from "@/types/post/post";
import Image from "next/image";

function SingleComment({ comment }: { comment: PostCommentType }) {
  return (
    <p className="flex flex-col gap-3 border-b border-gray-600 px-1 py-2">
      <span className="font-bold flex gap-3">
        <Image
          src={"/img/img.jpg"}
          alt="author img"
          width={40}
          height={40}
          className="object-cover aspect-[1/1] rounded-full"
        />
        {comment.author.name}
      </span>
      <span>{comment.comment}</span>
    </p>
  );
}

export default SingleComment;
