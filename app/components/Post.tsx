import Link from "next/link";
import React from "react";

type Props = {
  post: Post;
};

const Post = ({ post }: Props) => {
  return (
    <div className="w-3/4 p-4 max-w-4xl rounded-md mx-auto my-3 bg-slate-700 text-slate-300 ">
      <section
        id="title-and-action"
        className="flex justify-between items-center my-2"
      >
        <h2 className="mr-auto font-semibold">{post.title}</h2>
        <Link href={`/post/edit/${post.id}`} className="btn-or-link">
          {"Edit Post"}
        </Link>
      </section>
      <section id="Date & Description"></section>
    </div>
  );
};

export default Post;
