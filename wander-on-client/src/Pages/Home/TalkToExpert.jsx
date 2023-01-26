import React from "react";
import cta from "../../images/cta-image.svg";

const TalkToExpert = () => {
  return (
    <div className="bg-expert bg-cover bg-no-repeat lg:px-36 lg:py-10 p-4">
      <div className="container mx-auto p-8 lg:p-10 bg-white grid grid-cols-2 gap-6 rounded-3xl lg:px-20 lg:py-10">
        <div className=" text-left order-2 lg:order-1">
          <h1 className="text-[11px] lg:text-[26px] text-accent font-semibold">
            Hand over all your
            <br />
            requirements to our travel
            <br />
            experts who've curated more
            <br />
            than 200 itineraries.
          </h1>
          <button className="btn bg-[#13243F] text-white font-normal rounded-xl text-[11px] lg:text-[17px] mt-3 mb-3">
            TALK TO OUR EXPERT
          </button>
          <p className=" font-semibold text-[9px] lg:text-[14px]">
            P.S.- We love talking about travel 24*7
          </p>
        </div>
        <div className="flex justify-center lg:justify-end items-center order-1 lg:order-2">
          <img src={cta} className="lg:w-1/2" alt="" />
        </div>
      </div>
    </div>
  );
};

export default TalkToExpert;
