import { Post } from "@prisma/client";
import Image from "next/image";
import Link from "next/link";
async function fetchPosts() {
  const res = await fetch(
    "http://localhost:3000/api/blog" /* , {
    next: { revalidate: 24 * 60 * 60 },
  } */
  );

  const data = await res.json();
  const posts: Post[] = data.posts;
  return posts;
}

export default async function Home() {
  const posts = await fetchPosts();
  return (
    <main className="w-full   ">
      <div className="w-3/4 md:w-2/4 m-auto p-4 my-4 mt-10 rounded-lg drop-shadow-lg bg-slate-700">
        <h1 className="text-slate-200 text-center text-2xl font-extrabold font-[verdana] ">
          NEXT.js FullStack Blog
        </h1>
      </div>
      <div className="flex w-3/4 md:w-2/4 m-auto">
        <Link
          href={"/blog/add"}
          className="w-1/2 md:w-1/4 max-w-xs rounded-md p-2 px-4  bg-slate-300 font-semibold text-center ml-auto whitespace-nowrap min-w-max"
        >
          Add New Post 🚀
        </Link>
      </div>
    </main>
  );
}
