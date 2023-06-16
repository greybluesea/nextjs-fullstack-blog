import { addPost, getAll } from "@/lib/data";
import { NextResponse } from "next/server";

export const GET = async (req: Request, res: Response) => {
  try {
    const posts = getAll();
    return NextResponse.json(
      { message: "OK, all posts got", posts },
      { status: 200 }
    );
  } catch (err) {
    return NextResponse.json({ message: "Error", err }, { status: 500 });
  }
};

export const POST = async (req: Request, res: Response) => {
  const { title, description } = await req.json();
  try {
    const post = {
      title,
      description,
      id: Date.now().toString(),
      date: new Date(),
    };
    addPost(post);

    return NextResponse.json(
      { message: "OK, post added", post },
      { status: 201 }
    );
  } catch (err) {
    return NextResponse.json({ message: "Error", err }, { status: 500 });
  }
};
