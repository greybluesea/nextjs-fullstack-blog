import { Post } from "@prisma/client";
import Image from "next/image";
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
    <main className="w-full min-h-full  ">
      <div className="w-3/4 md:w-2/4 m-auto p-4 my-4 rounded-lg drop-shadow-lg ">
        <h1 className="text-slate-200 text-center text-2xl font-extrabold font-[verdana] ">
          NEXT.js FullStack Blog
        </h1>
      </div>
      Great
    </main>
  );
}
