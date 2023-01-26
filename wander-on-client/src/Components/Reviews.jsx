import React from "react";
import google from "../images/google-review.svg";
import facebook from "../images/facebook-review.svg";
import star from "../images/star.svg";
import tripadvisor from "../images/tripadvisor-review.svg";

const Reviews = () => {
  return (
    <div className="">
      <p className=" text-[11px] lg:text-[22px] font-normal pt-10 pb-4">
        Get ready for 5-star Experiences with us
      </p>
      <div className="grid grid-cols-3 gap-6">
        <div className="flex flex-col justify-center items-center">
          <img src={google} className="w-1/3 lg:w-[63.29px]" alt="" />
          <div className="flex gap-2">
            <img src={star} className="w-1/3 lg:w-full" alt="" />
            <h2 className="text-[15px] lg:text-[29px]  text-accent">4.9</h2>
          </div>
          <p className="text-[9px] lg:text-[14px]  text-accent">
            (5794 reviews)
          </p>
        </div>
        <div className="flex flex-col justify-center items-center">
          <img src={tripadvisor} className="w-1/3 lg:w-[63.29px] mb-2" alt="" />
          <div className="flex gap-2">
            <img src={star} className="w-1/3 lg:w-full" alt="" />
            <h2 className="text-[15px] lg:text-[29px]  text-accent">5.0</h2>
          </div>
          <p className="text-[9px] lg:text-[14px]  text-accent">
            (5794 reviews)
          </p>
        </div>
        <div className="flex flex-col justify-center items-center">
          <img src={facebook} className="w-1/3 lg:w-[63.29px]" alt="" />
          <div className="flex gap-2">
            <img src={star} className="w-1/3 lg:w-full" alt="" />
            <h2 className="text-[15px] lg:text-[29px]  text-accent">4.9</h2>
          </div>
          <p className="text-[9px] lg:text-[14px]  text-accent">
            (645 reviews)
          </p>
        </div>
      </div>
    </div>
  );
};

export default Reviews;
