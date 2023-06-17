import Link from "next/link";

import Post from "./components/Post";

async function fetchPosts() {
  const res = await fetch(
    "http://localhost:3000/api/blog" /* , {
    next: { revalidate: 10 },
  } */
  );

  const data = await res.json();

  return data.posts;
}

export default async function Home() {
  const posts: Post[] = await fetchPosts();
  return (
    <main className="w-full   ">
      <section
        id="title"
        className="w-3/4 md:w-2/4 m-auto max-w-xl p-4 my-5 mt-10 rounded-lg drop-shadow-lg bg-slate-700"
      >
        <h1 className="text-slate-200 text-center text-2xl font-extrabold font-[verdana] ">
          NEXT.js FullStack Blog
        </h1>
      </section>
      <section
        id="addPostBtn"
        className="flex w-3/4 md:w-2/4  max-w-4xl m-auto"
      >
        <Link
          href={"/blog/add"}
          className="w-1/2 md:w-1/4 max-w-xs rounded-md p-2 px-4  bg-slate-300 font-semibold text-center ml-auto whitespace-nowrap min-w-max"
        >
          Add New Post 🚀
        </Link>
      </section>
      <section
        id="posts"
        className="w-full felx flex-col justify-center items-center"
      >
        {posts.map((post: Post) => (
          <Post key={post.id} post={post} />
        ))}
      </section>
    </main>
  );
}
