import { connectToDb } from "@/database/connection";
import Blog from "@/models/blog";
import { NextResponse } from "next/server";

export async function GET(req, params) {
  console.log(params);
  const {
    params: { id },
  } = params;

  try {
    await connectToDb();

    const blog = await Blog.findById(id);
    console.log(blog);
    return NextResponse.json({
      success: true,
      blog,
    });
  } catch (error) {
    return NextResponse.json({
      success: false,
      message: error.message,
    });
  }
}
