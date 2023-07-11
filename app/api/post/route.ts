import { addPost, getAll } from "@/lib/unused/data";
import prisma from "@/prisma/singleton";
import { NextResponse } from "next/server";

export async function main() {
  try {
    await prisma.$connect();
  } catch (err) {
    return NextResponse.json({
      message: "Error, Database connnection unsucessful",
      err,
    });
  }
}

export const GET = async () => {
  try {
    await main();
    const posts = await prisma.post.findMany();

    return NextResponse.json(
      { message: "Success, all posts got", posts },
      { status: 200 }
    );
  } catch (err) {
    return NextResponse.json({ message: "Error", err }, { status: 500 });
  } finally {
    await prisma.$disconnect();
  }
};

export const POST = async (req: Request) => {
  try {
    const { title, description } = await req.json();
    await main();
    /*  const post = {
      title,
      description,
      id: Date.now().toString(),
      date: new Date(),
    }; */

    const post = await prisma.post.create({ data: { title, description } });

    return NextResponse.json(
      { message: "Success, post added", post },
      { status: 201 }
    );
  } catch (err) {
    return NextResponse.json({ message: "Error", err }, { status: 500 });
  } finally {
    await prisma.$disconnect();
  }
};
