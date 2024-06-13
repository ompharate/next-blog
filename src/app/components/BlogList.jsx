import React from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Link from "next/link";
import { FcLike } from "react-icons/fc";
import { FaEye } from "react-icons/fa";

const BlogList = ({ BlogList }) => {
  return (
    <div className="grid sm:grid-cols-4 max-w-6xl mx-auto m-2 gap-8">
      {BlogList && BlogList.length > 0 ? (
        <>
          {BlogList.map((blog,index) => (
            <Card key={index} className="max-w-3xl bg-red-300 cursor-pointer shadow-md hover:shadow-xl hover:bg-red-400">
              <CardHeader>
                <CardTitle>
                  <Link className="underline text-white" href={`/blog/${blog._id}`}> {blog.title.substring(0, 50)}... </Link>
                </CardTitle>
                <CardDescription className="text-black">{blog.body.substring(0, 100)}...</CardDescription>
              </CardHeader>
              <CardContent>
               {blog.tags.map((tag,index)=>(
                <p key={index}>{tag}</p>
               ))}
              </CardContent>
              <CardFooter className="flex gap-4">
              <FcLike color="blue"/>  {blog?.reactions.likes}
              <FaEye />
             {blog?.views}  
              </CardFooter>
            </Card>
          ))}
        </>
      ) : null}
    </div>
  );
};

export default BlogList;
