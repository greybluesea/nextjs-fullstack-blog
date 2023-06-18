"use client";

import { useRouter } from "next/navigation";
import React, { useEffect, useRef } from "react";
import toast, { Toaster } from "react-hot-toast";

async function fetchPost(id: string) {
  const res = await fetch(`http://localhost:3000/api/post/${id}`);
  const data = await res.json();
  return data.post;
}

async function updatePost(post: Partial<Post>) {
  await fetch(`http://localhost:3000/api/post/${post.id}`, {
    method: "PUT",
    body: JSON.stringify({
      ...post,
      date: new Date(),
    }),
  });
}

async function deletePost(id: string) {
  await fetch(`http://localhost:3000/api/post/${id}`, {
    method: "DELETE",
  });
}

const EditPostPage = ({ params: { id } }: { params: { id: string } }) => {
  const router = useRouter();
  const refTitle = useRef<HTMLInputElement | null>(null);
  const refDescription = useRef<HTMLTextAreaElement | null>(null);

  useEffect(() => {
    toast.loading("fetching post details", { id: "1" });
    fetchPost(id)
      .then((postData) => {
        const post: Post = postData;
        if (refTitle.current && refDescription.current) {
          refTitle.current.value = post.title;
          refDescription.current.value = post.description;
        }
        toast.success("post details fetched", { id: "1" });
      })
      .catch((err) => console.log(err));
  }, []);

  /* const post: Post = await fetchPost(id); */

  const handleUpdate = async (e: React.FormEvent) => {
    e.preventDefault();
    /* toast.loading("Updating Post ", { id: "1" }); */
    toast.promise(
      updatePost({
        id,
        title: refTitle.current!.value,
        description: refDescription.current!.value,
      }),
      {
        loading: "Updating Post",
        success: <b>Post Updated</b>,
        error: <b>Could not update.</b>,
      }
    );
    /* toast.success("Post Updated ", { id: "1" }); */

    setTimeout(() => {
      router.push("/");
    }, 6500);
  };

  const handleDelete = async (e: React.FormEvent) => {
    e.preventDefault();
    toast.promise(deletePost(id), {
      loading: "Deleting Post",
      success: <b>Post Deleted</b>,
      error: <b>Could not Delete.</b>,
    });
    setTimeout(() => {
      router.push("/");
    }, 6500);
  };

  return (
    <>
      <form className="flex gap-3 flex-col  ">
        <Toaster />
        <h2 className="text-slate-300 font-semibold text-lg text-center">
          Edit Post
        </h2>
        <label className="text-slate-300 align-text-bottom">Title</label>
        <input
          type="text"
          placeholder="Enter Title"
          name="title"
          ref={refTitle}
          className="border placeholder-slate-500 bg-slate-300 rounded px-2 py-1 outline-slate-300 focus-within:border-slate-100"
          autoFocus
          /*  defaultValue={post.title} */
        />
        <label className="text-slate-300 align-text-bottom">Content</label>
        <textarea
          name="description"
          ref={refDescription}
          placeholder="Enter Content"
          /*   defaultValue={post.description} */
          className="h-40 placeholder-slate-500  border bg-slate-300 rounded px-2 py-1 outline-slate-300 focus-within:border-slate-100 focus-within:ring-offset-5"
        />
        <div className="ml-auto space-x-10">
          <button
            onClick={handleDelete}
            className="btn-or-link w-24 bg-red-500/80 "
          >
            Delete
          </button>
          <button
            onClick={handleUpdate}
            className="btn-or-link w-24  active:disabled "
            type="submit"
          >
            Update
          </button>
        </div>
      </form>
      <ul className="flex mt-4  flex-col  text-slate-400">
        <li>Note:</li>
        <li>
          This page is a{" "}
          <span className="text-slate-200">client component</span>, to utilise
          Rest API.
        </li>
        <li>
          After submission and re-directed to Homepage automatically, a few
          seconds' wait and <span className="text-slate-200">reload</span> of
          page is needed to see the new post.
        </li>
      </ul>
    </>
  );
};

export default EditPostPage;
