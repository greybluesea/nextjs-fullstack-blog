import Link from "next/link";

import Post from "./components/Post";

async function fetchPosts() {
  try {
    const res = await fetch("http://localhost:3000/api/post", {
      /*  next: { revalidate: 10 }, */ cache: "no-cache",
      next: { tags: ["posts"] },
    });

    const data = await res.json();

    return data.posts;
  } catch (err) {
    console.log(err);
  }
}

export default async function Home() {
  const posts: Post[] = (await fetchPosts()) || [];
  console.log(posts);
  return (
    <main className="w-full   ">
      <section id="addPostBtn" className="flex w-3/4 max-w-4xl m-auto">
        <p className="text-slate-500 mt-2">
          This Homepage is rendered as{" "}
          <span className="text-slate-300">static page</span> via SSG
        </p>
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
        {posts?.map((post: Post) => (
          <Post key={post.id} post={post} />
        ))}
      </section>
    </main>
  );
}
