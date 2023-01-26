import React from "react";

const TripBanner = ({ banner_image, subtitle, title }) => {
  return (
    <figure className="relative h-[600px] mb-10">
      <img src={banner_image} className="w-full h-full object-cover" alt="" />
      <div className="overlay-2"></div>
      <div className="absolute bottom-10 lg:left-20 container mx-auto">
        <div className="text-left text-white ">
          <p className="text-[13px] lg:text-[22px] w-96">{subtitle}</p>
          <h1 className="text-[34px] lg:text-[65px] font-semibold">{title}</h1>
        </div>
        <div className="flex justify-end items-end gap-6">
          <button className="hidden md:block btn bg-white rounded-2xl uppercase border-none  text-black text-[17px] px-10 hover:bg-white hover:scale-110">
            get itinerary
          </button>
          <button className="btn bg-white rounded-lg py-0 lg:rounded-2xl uppercase border-none  text-black text-[9px] lg:text-[17px] px-8 lg:px-10 hover:bg-white hover:scale-110">
            book now
          </button>
        </div>
      </div>
    </figure>
  );
};

export default TripBanner;
