"use client";
import React, { useEffect } from "react";
import { FcLike } from "react-icons/fc";
import { FaEye } from "react-icons/fa";
import { Button } from "@/components/ui/button";
import { useToast } from "@/components/ui/use-toast";
import { IoMdArrowRoundBack } from "react-icons/io";
import { useRouter } from "next/navigation";

const BlogDetails = ({ blog: { blog } }) => {
  const router = useRouter();
  const { toast } = useToast();
  const id = blog?._id;
  const updateViews = async () => {
    try {
      if (!id) return;
      const response = await fetch(
        `http://localhost:3000/api/add-blog?id=${id}`,
        {
          method: "PUT",
        }
      );
    } catch (error) {}
  };

  const deleteBlog = async (id) => {
    try {
      const response = await fetch(
        `http://localhost:3000/api/delete-blog?id=${id}`,
        {
          method: "DELETE",
        }
      );
      const data = await response.json();
      toast({
        title: "Blog is deleted",
        description: Date.now(),
      });
      router.replace("/");
    } catch (error) {
      console.log(error);
      toast({
        variant: "destructive",
        title: "Uh oh! Something went wrong.",
        description: "There was a problem with your request.",
      });
    }
  };

  useEffect(() => {
    setTimeout(() => {
      updateViews();
    }, 10000);
  }, [id]);

  return (
    <div className="bg-slate-100 p-16">
      <div className="flex justify-between">
        <IoMdArrowRoundBack
          onClick={() => router.replace("/")}
          className="cursor-pointer"
          size={30}
        />
        <h1 className="text-3xl font-semibold underline">{blog?.title}</h1>
        <Button onClick={() => deleteBlog(blog?._id)} variant="destructive">
          Delete
        </Button>
      </div>
      <div>
        <img className="mx-auto" src={blog?.image} />
        <div>
          <pre className="text-wrap">{blog?.body}</pre>
        </div>
        <div className="flex gap-4">
          <div className="flex gap-2 items-center">
            <FcLike /> {blog?.reactions.likes}
          </div>
          <div className="flex gap-2 items-center">
            <FaEye />
            {blog?.views}
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogDetails;
