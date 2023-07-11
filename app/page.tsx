import Link from "next/link";
import Post from "./components/Post";
import { fetchPosts } from "@/lib/utils";

export default async function Home() {
  const posts: Post[] = (await fetchPosts()) || [];

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
