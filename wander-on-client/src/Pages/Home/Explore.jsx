import React from "react";
import sale from "../../images/sale-tag.svg";
import international from "../../images/international.png";
import jeep from "../../images/jeep.png";
import backpack from "../../images/backpacking-trips.svg";
import trip from "../../images/weekend-trips.svg";
import customized from "../../images/customised-trips.svg";

const Explore = () => {
  return (
    <div className="container mx-auto px-4 md:px-0">
      <h1 className=" font-semibold text-[32px] text-secondary pb-12">
        Explore WanderOn
      </h1>
      <div className="grid grid-cols-3 md:grid-cols-3 lg:grid-cols-6 gap-6">
        <div className="flex flex-col justify-between items-center hover:scale-125 transition duration-200 ease-in-out">
          <img src={sale} alt="" className="lg:w-16 w-8  mb-2" />
          <h1 className="lg:text-[17px] text-[9px] text-accent  uppercase font-semibold text-center">
            Early Bird
            <br />
            2023
          </h1>
        </div>

        <div className="flex flex-col justify-between items-center hover:scale-110 transition duration-200 ease-in-out">
          <img src={international} alt="" className="lg:w-16 w-8 mb-3" />
          <h1 className="lg:text-[17px] text-[9px] text-accent  uppercase font-semibold text-center">
            International
            <br />
            Trips
          </h1>
        </div>

        <div className="flex flex-col justify-between items-center hover:scale-110 transition duration-200 ease-in-out">
          <img src={jeep} alt="" className="lg:w-20 w-10 mb-2" />
          <h1 className="lg:text-[17px] text-[9px] text-accent  uppercase font-semibold text-center">
            Ladakh and Spiti
            <br />
            2023
          </h1>
        </div>

        <div className="flex flex-col justify-between items-center hover:scale-110 transition duration-200 ease-in-out">
          <img src={backpack} alt="" className="lg:w-14 w-6 mb-2" />
          <h1 className="lg:text-[17px] text-[9px] text-accent  uppercase font-semibold text-center">
            Backpacking
            <br />
            Trips
          </h1>
        </div>

        <div className="flex flex-col justify-between items-center hover:scale-110 transition duration-200 ease-in-out">
          <img src={trip} alt="" className="lg:w-14 w-6 mb-2" />
          <h1 className="lg:text-[17px] text-[9px] text-accent  uppercase font-semibold text-center">
            Weekend
            <br />
            Trips
          </h1>
        </div>

        <div className="flex flex-col justify-between items-center hover:scale-110 transition duration-200 ease-in-out">
          <img src={customized} alt="" className="lg:w-14 w-6 mb-2" />
          <h1 className="lg:text-[17px] text-[9px] text-accent  uppercase font-semibold text-center">
            Customised
            <br />
            Trips
          </h1>
        </div>
      </div>
    </div>
  );
};

export default Explore;
