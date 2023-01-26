import React from "react";

const BlogBanner = () => {
  return (
    <div className="bg-blog h-screen bg-cover bg-no-repeat">
      <div className="overlay"></div>
      <div className="flex flex-col justify-center items-center relative z-10">
        <h1 className="text-[17px] md:text-[35px]  font-bold text-white pt-96 lg:px-56">
          Let's Take a look as to what the coolest travel community says about
          the upcoming travel trends!
        </h1>
      </div>
    </div>
  );
};

export default BlogBanner;
