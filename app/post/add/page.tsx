import React from "react";
import { redirect } from "next/navigation";
import { prisma } from "@/prisma/singleton";
import { main } from "@/app/api/post/route";

async function addNew(data: FormData) {
  "use server";

  const title = data.get("title");
  const description = data.get("description");
  if (
    title &&
    description &&
    typeof title === "string" &&
    typeof description === "string"
  ) {
    await main();

    await prisma.post.create({ data: { title, description } });

    redirect("/");
  }
}

const AddPostPage = () => {
  return (
    <>
      <form action={addNew} className="flex gap-3 flex-col  ">
        {/*  <label>Title</label> */}
        <h2 className="text-slate-300 font-semibold text-lg">Add A New Post</h2>
        <input
          type="text"
          placeholder="Enter Title"
          name="title"
          className="border placeholder-slate-500 bg-slate-300 rounded px-2 py-1 outline-slate-300 focus-within:border-slate-100"
          autoFocus
        />
        {/* <label>Ceontent</label> */}
        <textarea
          name="description"
          placeholder="Enter Content"
          className="h-40 placeholder-slate-500  border bg-slate-300 rounded px-2 py-1 outline-slate-300 focus-within:border-slate-100 focus-within:ring-offset-5"
        />
        <button className="btn-or-link w-24 ml-auto" type="submit">
          Submit
        </button>
      </form>
      <ul className="flex mt-4  flex-col  text-slate-400">
        <li>Note:</li>
        <li>
          This page is a{" "}
          <span className="text-slate-200">server component</span>, using server
          actions.
        </li>
        <li>
          After submission and re-directed to Homepage automatically, a few
          seconds' wait and <span className="text-slate-200">reload</span> of
          page may be needed to see the new post.
        </li>
      </ul>
    </>
  );
};

export default AddPostPage;
