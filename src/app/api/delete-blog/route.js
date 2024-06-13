const { connectToDb } = require("@/database/connection");
import Blog from "@/models/blog";
import { NextResponse } from "next/server";

export async function DELETE(req) {
  try {
    await connectToDb();
    const { searchParams } = new URL(req.url);
    const getId = searchParams.get("id");

    if (!getId) {
      return NextResponse.json({
        success: false,
        message: "id is required",
      });
    }

    await Blog.findByIdAndDelete(getId);

    return NextResponse.json({
      success: true,
      message: "Blog deleted successfully",
    });
  } catch (error) {
    return NextResponse.json({
      success: false,
      message: error.message,
    });
  }
}
