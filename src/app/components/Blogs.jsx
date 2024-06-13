"use client";
import React, { useEffect, useState } from "react";
import BlogList from "./BlogList";

const Blogs = () => {
  const [data, setData] = useState([]);
  const fetchAllBlogs = async () => {
    try {
      const response = await fetch("/api/get-blog/");
      const data = await response.json();
      console.log(data);
      if (!data.success) {
        throw new Error("Failed to get blog");
      } 
      setData(data.allBlogs);
    } catch (error) {
      throw new Error(error);
    }
  };

  useEffect(() => {
    fetchAllBlogs();
  }, []);
  console.log(data);

  return (
    <div>
     <BlogList BlogList={data}/>
    </div>
  );
};

export default Blogs;
