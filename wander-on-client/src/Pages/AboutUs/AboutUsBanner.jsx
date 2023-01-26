import React from "react";

const AboutUsBanner = () => {
  return (
    <div className="bg-about h-[60vh] bg-cover bg-center bg-no-repeat">
      <div className="overlay-4"></div>
      <div className="flex flex-col justify-center items-center relative z-10">
        <h1 className="text-[26px] md:text-[43px]  font-semibold text-white pt-56 lg:px-56 uppercase">
          about us
        </h1>
      </div>
    </div>
  );
};

export default AboutUsBanner;
