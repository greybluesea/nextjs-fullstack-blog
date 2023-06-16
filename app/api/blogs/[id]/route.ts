import { deletePost, getPost, updatePost } from "@/lib/data";
import { NextResponse } from "next/server";

export const GET = async (req: Request) => {
  try {
    const id = req.url.split("blogs/")[1];

    const post = getPost(id);
    if (!post) {
      return NextResponse.json(
        { message: "ERROR, no such post found" },
        { status: 404 }
      );
    }
    return NextResponse.json(
      { message: "OK, post got", post },
      { status: 200 }
    );
  } catch (err) {
    return NextResponse.json({ message: "ERROR", err }, { status: 500 });
  }
};

export const PUT = async (req: Request) => {
  try {
    const { title, description } = await req.json();
    const id = req.url.split("blogs/")[1];
    const newPost = { id, title, description, date: new Date() };
    updatePost(newPost);
    return NextResponse.json(
      { message: "OK, post updated", newPost },
      { status: 200 }
    );
  } catch (err) {
    return NextResponse.json({ message: "ERROR", err }, { status: 500 });
  }
};

export const DELETE = async (req: Request) => {
  try {
    const id = req.url.split("blogs/")[1];
    deletePost(id);
    return NextResponse.json(
      { message: "OK, post deleted", id },
      { status: 200 }
    );
  } catch (err) {
    return NextResponse.json({ message: "ERROR", err }, { status: 500 });
  }
};
