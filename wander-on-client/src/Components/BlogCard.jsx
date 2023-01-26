import React from "react";

const BlogCard = ({blog}) => {
    const {_id, title, image} = blog
  return (
    <a href={`blogs/${_id}`}>
    <div className="">
      <figure>
        <img src={image} className="h-[35vh] object-cover" alt="Shoes" />
      </figure>
      <div className="text-left">
        <h2 className="text-[2.8vw] lg:text-[0.9vw] font-bold pt-2">{title}</h2>
        <p className="text-primary text-[2vw] lg:text-[0.5vw]">Read More {">"} </p>
      </div>
    </div>
    </a>
  );
};

export default BlogCard;
