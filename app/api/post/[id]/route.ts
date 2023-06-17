import { NextResponse } from "next/server";
import { main } from "../route";
import { prisma } from "@/prisma/singleton";

export const GET = async (req: Request) => {
  try {
    const id = req.url.split("post/")[1];
    await main();
    const post = await prisma.post.findFirst({ where: { id } });
    /* const post = getPost(id); */
    if (!post) {
      return NextResponse.json(
        { message: "ERROR, post not found" },
        { status: 404 }
      );
    }
    return NextResponse.json(
      { message: "Success, post retieved", post },
      { status: 200 }
    );
  } catch (err) {
    return NextResponse.json({ message: "ERROR", err }, { status: 500 });
  } finally {
    await prisma.$disconnect();
  }
};

export const PUT = async (req: Request) => {
  try {
    const { title, description } = await req.json();
    const id = req.url.split("post/")[1];
    await main();
    const newPost = await prisma.post.update({
      data: { title, description },
      where: { id },
    });

    /* const newPost = { id, title, description, date: new Date() };
      updatePost(newPost); */
    return NextResponse.json(
      { message: "Success, post updated", newPost },
      { status: 200 }
    );
  } catch (err) {
    return NextResponse.json({ message: "ERROR", err }, { status: 500 });
  } finally {
    await prisma.$disconnect();
  }
};

export const DELETE = async (req: Request) => {
  try {
    const id = req.url.split("post/")[1];
    await main();
    const deletedPost = await prisma.post.delete({ where: { id } });
    /*   deletePost(id); */
    return NextResponse.json(
      { message: "Success, post deleted", id },
      { status: 200 }
    );
  } catch (err) {
    return NextResponse.json({ message: "ERROR", err }, { status: 500 });
  } finally {
    await prisma.$disconnect();
  }
};
