import React from "react";
import facebook from "../images/facebook.svg";
// import instagram from '../images/instagram.svg'
import pinterest from "../images/pinterest.svg";
// import linkedin from '../images/linkedin.svg'
import youtube from "../images/youtube.svg";

const SocialLinks = () => {
  return (
    <div className="container mx-auto px-4 md:px-0 py-10">
      <div className="flex-col">
        <div className="flex justify-between items-center gap-6 lg:px-96">
          <div className="w-10 h-10 bg-[#CBC4C4] rounded-full flex justify-center items-center">
            <img src={facebook} alt="" className="w-6" />
          </div>
          <div className="w-10 h-10 bg-[#CBC4C4] rounded-full flex justify-center items-center">
            <img src={pinterest} alt="" className="w-6" />
          </div>
          <div className="w-10 h-10 bg-[#CBC4C4] rounded-full flex justify-center items-center">
            <img src={facebook} alt="" className="w-6" />
          </div>
          <div className="w-10 h-10 bg-[#CBC4C4] rounded-full flex justify-center items-center">
            <img src={facebook} alt="" className="w-6" />
          </div>
          <div className="w-10 h-10 bg-[#CBC4C4] rounded-full flex justify-center items-center">
            <img src={youtube} alt="" className="w-6" />
          </div>
        </div>
        <div className="flex md:flex-row justify-between items-center lg:px-72 py-10  font-semibold">
          <p className="text-[9px] lg:text-[16px]">hello@wanderon.in</p>
          <p className="text-[9px] lg:text-[16px]">+91-9870301533</p>
          <p className="text-[9px] lg:text-[16px]">www.wanderon.in</p>
        </div>
      </div>
    </div>
  );
};

export default SocialLinks;
