import React from "react";
import clock from "../../images/clock-quick.svg";
import rupee from "../../images/rupee.svg";
import map from "../../images/location-pin.svg";
import DoubleText from "../../Components/DoubleText";
import About from "./About";
import Videos from "./Videos";
import Photos from "./Photos";
import Reviews from "../../Components/Reviews";
import Highlights from "./Highlights";

const TripDetails = ({
  duration,
  starting_price,
  pickup_and_drop,
  about,
  photos,
  videos,
  highlights,
}) => {
  console.log(highlights);

  return (
    <div className="space-y-8">
      {/* circle info  */}
      <div className="flex flex-wrap justify-around w-1/2 ml-12">
        <div className=" text-accent flex flex-col justify-center items-center ">
          <div className="bg-[#d4d4d4] rounded-full w-14 h-14 flex justify-center items-center">
            <img src={clock} className="text-black w-8" alt="" />
          </div>
          <p>Duration</p>
          <h2 className="text-[22px] font-semibold">{duration}</h2>
        </div>
        {starting_price && (
          <div className=" text-accent flex flex-col justify-center items-center ">
            <div className="bg-[#d4d4d4] rounded-full w-14 h-14 flex justify-center items-center">
              <img src={rupee} className="text-black w-8" alt="" />
            </div>
            <p>Starting Price</p>
            <h2 className="text-[22px] font-semibold">{starting_price}</h2>
          </div>
        )}
        <div className=" text-accent flex flex-col justify-center items-center ">
          <div className="bg-[#d4d4d4] rounded-full w-14 h-14 flex justify-center items-center">
            <img src={map} className="text-black w-8" alt="" />
          </div>
          <p>Pick-up and Drop</p>
          <h2 className="text-[22px] font-semibold">{pickup_and_drop}</h2>
        </div>
      </div>
      <div className="flex justify-between items-center  font-semibold ">
        <button className="btn bg-[#d4d4d4] text-black border-none hover:bg-[rgb(58, 58, 58)] hover:text-white hover:scale-y-110 text-[22px] w-[31%] capitalize">
          Itinerary
        </button>
        <button className="btn bg-[#d4d4d4] text-black border-none hover:bg-[rgb(58, 58, 58)] hover:text-white hover:scale-y-110 text-[22px] w-[31%]  capitalize">
          Date and Costing
        </button>
        <button className="btn bg-[#d4d4d4] text-black border-none hover:bg-[rgb(58, 58, 58)] hover:text-white hover:scale-y-110 text-[22px] w-[31%] capitalize">
          Other Info
        </button>
      </div>

      {highlights && <Highlights highlights={highlights} />}
      {about && <About about={about} />}
      {/* <Videos videos={videos}/> */}
      {photos && <Photos photos={photos} />}
      <Reviews />
    </div>
  );
};

export default TripDetails;
