import { PostType } from "@/types/post/post";

import Post from "../post/Post";

function PostList({ list }: { list: PostType[] }) {
  return (
    <section className="w-full h-full mt-4">
      {list.map((i) => (
        <Post post={i} key={i.id} />
      ))}
    </section>
  );
}

export default PostList;
