import Link from "next/link";

import Post from "./components/Post";

async function fetchPosts() {
  const res = await fetch("http://localhost:3000/api/post", {
    next: { revalidate: 10 },
  });

  const data = await res.json();

  return data.posts;
}

export default async function Home() {
  const posts: Post[] = await fetchPosts();
  return (
    <main className="w-full   ">
      <section id="addPostBtn" className="flex w-3/4 max-w-4xl m-auto">
        <Link
          href={"/post/add"}
          className="w-20 rounded-md p-2 px-4  bg-slate-300 hover:text-slate-400 focus-within:text-slate-400 font-semibold text-center ml-auto whitespace-nowrap min-w-max"
        >
          Add New Post 🚀
        </Link>
      </section>
      <section
        id="posts"
        className="w-full felx flex-col justify-center items-center mb-6"
      >
        {posts.map((post: Post) => (
          <Post key={post.id} post={post} />
        ))}
      </section>
    </main>
  );
}
