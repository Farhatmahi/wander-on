import React, { useState } from "react";
import { useEffect } from "react";
import {
  FaEnvelopeSquare,
  FaFacebookSquare,
  FaLinkedin,
  FaTwitterSquare,
  FaWhatsappSquare,
} from "react-icons/fa";
import { useLoaderData } from "react-router-dom";
import BlogCard2 from "../../Components/BlogCard2";

const BlogDetailsPage = () => {
  const blog = useLoaderData();

  const [blogs, setBlogs] = useState([]);
  useEffect(() => {
    fetch("http://localhost:4000/blog/get-blogs")
      .then((res) => res.json())
      .then((data) => setBlogs(data));
  }, []);

  return (
    <div className="space-y-14 text-accent text-left">
      {/* banner  */}
      <div
        style={{ backgroundImage: `url(${blog.image})` }}
        className="h-screen bg-cover bg-no-repeat"
      >
        <div className="overlay"></div>
        <div className="flex flex-col justify-center items-center relative z-10">
          <h1 className="text-[25px] md:text-[60px]  font-semibold text-white pt-64 px-4 lg:px-56">
            Let’s Take a look as to what the coolest travel community says about
            the upcoming travel trends!
          </h1>
        </div>
      </div>
      {/* content  */}
      <div className="grid grid-cols-1 lg:grid-cols-10 gap-6 container mx-auto px-4 md:px-0">
        <div className="col-span-1">
          <div className="hidden lg:flex lg:flex-col justify-center items-center">
            <div className="">
              <FaFacebookSquare className="text-5xl" />
            </div>
            <div className="">
              <FaWhatsappSquare className="text-5xl" />
            </div>
            <div className="">
              <FaTwitterSquare className="text-5xl" />
            </div>
            <div className="">
              <FaLinkedin className="text-5xl" />
            </div>
            <div className="">
              <FaEnvelopeSquare className="text-5xl" />
            </div>
          </div>
        </div>
        <div className="col-span-6">
          <h1 className="text-[25px] font-bold hidden lg:block mb-4">
            {blog.title}
          </h1>
          <p>{blog.description}</p>
        </div>
        <div className="col-span-3 hidden lg:block">
          <h2 className="text-[1.2vw] font-semibold">Our Blog Posts</h2>
          <div className="flex flex-col justify-center items-center gap-2">
            {blogs.map((blog) => (
              <BlogCard2 key={blog._id} blog={blog} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogDetailsPage;
