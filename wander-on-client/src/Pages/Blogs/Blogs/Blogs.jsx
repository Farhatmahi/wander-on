import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import BlogCard from "../../../Components/BlogCard";
import BlogBanner from "../BlogBanner";

const Blogs = () => {
  const [blogs, setBlogs] = useState([]);
  useEffect(() => {
    fetch("http://localhost:4000/blog/get-blogs")
      .then((res) => res.json())
      .then((data) => setBlogs(data));
  }, []);

  console.log(blogs);

  return (
    <div className="space-y-10">
      <BlogBanner />
      <div className="container mx-auto px-4 md:px-0 grid grid-cols-1 lg:grid-cols-5 gap-4">
        {blogs.map((blog) => (
          <BlogCard key={blog._id} blog={blog}/>
        ))}
      </div>
    </div>
  );
};

export default Blogs;
