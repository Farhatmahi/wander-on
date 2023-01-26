import React from "react";

const BlogCard2 = ({ blog }) => {
  return (
    <div className="card card-side bg-gray-200">
      <figure className="h-[11vh] w-[10vw]">
        <img src={blog.image} className='h-full w-full object-cover' alt="Movie" />
      </figure>
      <div className="p-2">
        <h2 className="text-[0.93vw]">{blog.title}</h2>
      </div>
    </div>
  );
};

export default BlogCard2;
