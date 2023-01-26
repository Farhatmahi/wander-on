import React from "react";
import Countdown from 'react-countdown';

const EarlyBirdBanner = () => {
  return (
    <div className="bg-[url('https://ik.imagekit.io/workcations/gallery/triplist/offers/early-bird.jpg')] h-[60vh] bg-cover bg-center bg-no-repeat ">
      <div className="overlay-4"></div>
      <div className="flex flex-col justify-center items-center relative z-10">
        <h1 className="text-[10vw] md:text-[4.2vw] font-semibold text-white pt-28 lg:px-56 capitalize">
          Early Bird Offer 2023
        </h1>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 place-items-center container mx-auto px-4 md:px-0 mt-20">
          <div className="text-[2vw] font-semibold text-white">
            <h2>Early Bird Offer Ends In</h2>
          </div>
          <div className="">
            <button className="btn bg-gradient-to-r from-secondary to-primary text-white capitalize border-none">
              Book Your Voucher
            </button>
          </div>
          <div className="">
            <h2 className="text-[2vw] font-semibold text-white">
              Vouchers left
            </h2>
            <div className="bg-accent p-4 inline-block ">
              <h2 className="text-white font-semibold rounded-xl">24/100</h2>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EarlyBirdBanner;
