import { main } from "@/app/api/post/route";
import prisma from "@/prisma/singleton";
import { NextResponse } from "next/server";

export async function fetchPosts() {
  "use server";
  /*  try {
    const res = await fetch("http://localhost:3000/api/post", {
      // next: { revalidate: 10 },
      cache: "no-cache",
      // next: { tags: ["posts"] },
    });

    const data = await res.json();

    return data.posts;
  } catch (err) {
    console.log(err);
  } */
  try {
    await main();
    const posts = await prisma.post.findMany();

    return posts;
  } catch (err) {
    console.log(err);
  }
}
