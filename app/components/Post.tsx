import React from "react";

type Props = {
  post: Post;
};

const Post = ({ post }: Props) => {
  return (
    <div className="w-3/4 p-4 max-w-4xl rounded-md mx-auto my-3 bg-slate-700 text-slate-300 ">
      <div
        id="title-and-action"
        className="flex justify-between items-center my-2"
      >
        <h2 className="mr-auto font-semibold">{post.title}</h2>
        <link></link>
      </div>
    </div>
  );
};

export default Post;
