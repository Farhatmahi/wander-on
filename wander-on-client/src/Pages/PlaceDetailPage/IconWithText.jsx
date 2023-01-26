import React from "react";
import hospitality from "../../images/hospitality.png";
import stays from "../../images/stays.png";
import captain from "../../images/captains.png";

const IconWithText = () => {
  return (
    <div className="container mx-auto px-4 md:px-0 flex justify-around items-center">
      <div className="flex flex-col justify-center items-center">
        <img
          src={hospitality}
          className="lg:h-[6vw] h-[64px] mb-4"
          alt="third_party"
        />
        <h1 className="text-accent font-semibold  text-[13px] lg:text-[22px]">
          No Third Party Mess
        </h1>
      </div>
      <div className="flex flex-col justify-center items-center">
        <img
          src={stays}
          className="lg:h-[6vw] h-[64px] mb-4"
          alt="third_party"
        />
        <h1 className="text-accent font-semibold  text-[13px] lg:text-[22px]">
          No Third Party Mess
        </h1>
      </div>
      <div className="flex flex-col justify-center items-center">
        <img
          src={captain}
          className="lg:h-[6vw] h-[64px] mb-4"
          alt="third_party"
        />
        <h1 className="text-accent font-semibold  text-[13px] lg:text-[22px]">
          No Third Party Mess
        </h1>
      </div>
    </div>
  );
};

export default IconWithText;
