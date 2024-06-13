import { connectToDb } from "@/database/connection";
import Blog from "@/models/blog";
import { NextResponse } from "next/server";

export async function POST(req) {
  try {
    await connectToDb();
    const data = await req.json();
    const newBlog = await Blog.create(data);
  } catch (error) {
    console.log(error);
  }
  return NextResponse.json({
    success: true,
    message: "blog added",
  });
}

export async function PUT(req) {
  console.log("getting update")
  try {
    await connectToDb();
    const { searchParams } = new URL(req.url);
    const getId = searchParams.get("id");
    console.log("id",getId)
    await Blog.findByIdAndUpdate(getId, {
      $inc: { views: 1 },
    });
    return NextResponse.json({
      success: true,
      message: "Blog updated successfully",
    });
  } catch (error) {
    console.log("here error",error)
    return NextResponse.json({
      success: false,
      message: error.message,
    });
  }
}
