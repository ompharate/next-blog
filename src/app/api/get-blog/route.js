import Blog from "@/models/blog";
import { NextResponse } from "next/server";

const { connectToDb } = require("@/database/connection");

export async function GET() {
  console.log("here getting")
  await connectToDb();

  const allBlogs = await Blog.find({});
  return NextResponse.json({
    success: true,
    allBlogs,
  });
}
  