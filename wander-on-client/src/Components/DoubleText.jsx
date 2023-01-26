import React from "react";

const DoubleText = ({ text }) => {
  return (
    <div class="relative text-left ">
      <div class="text-[36px] lg:text-[43px] font-semibold text-accent lowercase absolute top-[20%] lg:top-[25%]">
        {text}
      </div>
      <div class="text-[64px] lg:text-[86px] font-semibold text-[#e6e6e6] uppercase">
        {text}
      </div>
    </div>
  );
};

export default DoubleText;
