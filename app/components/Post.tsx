import Link from "next/link";
import React from "react";

type Props = {
  post: Post;
};

const Post = ({ post }: Props) => {
  return (
    <div className="w-3/4 py-6 px-9 max-w-4xl rounded-md mx-auto my-3 bg-slate-700 text-slate-300 ">
      <section
        id="title-and-action"
        className="flex justify-between items-center my-2 gap-8"
      >
        <h2 className="mr-auto font-semibold text-xl overflow-hidden whitespace-nowrap">
          {post.title}
        </h2>
        <Link
          href={`/post/edit/${post.id}`}
          className="btn-or-link whitespace-nowrap"
        >
          {"Edit Post"}
        </Link>
      </section>
      <section id="Date & Description" className="overflow-hidden space-y-1">
        <p className="font-bold text-slate-300 text-sm">
          {new Date(post.date).toDateString()}
        </p>
        <p>{post.description}</p>
      </section>
    </div>
  );
};

export default Post;
