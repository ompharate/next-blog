"use client";
import BlogDetails from "@/app/components/BlogDetails";
import React, { useEffect, useState } from "react";

const Page = ({ params }) => {
  const [blog, setBlog] = useState([]);
  const getBlogById = async () => {
    // console.log(params);
    const response = await fetch(
      `https://opnextblog.vercel.app/api/get-blog/${params.id}`
    );
    const data = await response.json();
    // console.log(data);
    setBlog(data);
  };

  useEffect(() => {
    getBlogById();
  }, []);

  return <BlogDetails blog={blog} />;
};

export default Page;
