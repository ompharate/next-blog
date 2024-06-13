"use client";
import React, { useState } from "react";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { useToast } from "@/components/ui/use-toast";

const AddNewBlog = () => {
  const { toast } = useToast();
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  const [image, setImage] = useState("");

  const onSubmit = async () => {
    if(!title || !body || !body) return;
    const blogFormData = {
      title,
      body,
      image,
    };
    const response = await fetch("https://opnextblog.vercel.app/api/add-blog", {
      method: "POST",
      body: JSON.stringify(blogFormData),
    });

    toast({
      title: "Blog added successfully",
    })
   
    setTitle("");
    setBody("");
    setImage("");
  }


  return (
    <div className="max-w-screen-sm mx-auto flex gap-4 flex-col">
      <h1 className="text-2xl font-bold text-center">Add new Blog post</h1>
      <Input
        onChange={(e) => setTitle(e.target.value)}
        value={title}
        placeholder="title"
      />
      <Input
        onChange={(e) => setImage(e.target.value)}
        value={image}
        placeholder="image"
      />
      <Textarea
        onChange={(e) => setBody(e.target.value)}
        value={body}
        placeholder="body"
        rows={5}
      />
      <Button variant="outline" onClick={onSubmit}>
        Add
      </Button>
     
    </div>
  );
};
export default AddNewBlog;
