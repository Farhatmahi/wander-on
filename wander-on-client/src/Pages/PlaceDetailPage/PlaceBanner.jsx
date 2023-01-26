import React from "react";

import travellers from "../../images/cover-travellers.svg";
import stars from "../../images/cover-star.svg";
import map from "../../images/cover-destination.svg";

const PlaceBanner = ({ place }) => {

  console.log(place)

  return (
    <div
      style={{ backgroundImage: `url(${place.banner_image})` }}
      className="h-[75vh] bg-cover bg-no-repeat"
    >
      <div className="overlay-3"></div>
      <div className="flex flex-col justify-center items-center relative z-10">
        <h1 className="text-[26px] md:text-[4.2vw]  font-semibold text-white pt-56">
          {place.name}
        </h1>
        <p className="text-white  text-[2.2vw]">{place?.subtitle}</p>
        <div className="flex justify-around items-center w-[300px] lg:w-[100vw] lg:px-24 pt-36 lg:pt-28">
          <div className="flex flex-col justify-center items-center">
            <img src={travellers} className="w-6 lg:w-14" alt="" />
            <h1 className="text-[9px] lg:text-[22px] text-white ">50000+</h1>
            <h2 className="text-[9px] lg:text-[22px] text-white ">
              Happy Travellers
            </h2>
          </div>
          <div className="flex flex-col justify-center items-center">
            <img src={stars} className="w-6 lg:w-14" alt="" />
            <h1 className="text-[9px] lg:text-[22px] text-white ">8200+</h1>
            <h2 className="text-[9px] lg:text-[22px] text-white ">
              5 Star Reviews
            </h2>
          </div>
          <div className="flex flex-col justify-center items-center">
            <img src={map} className="w-6 lg:w-14" alt="" />
            <h1 className="text-[9px] lg:text-[22px] text-white ">300+</h1>
            <h2 className="text-[9px] lg:text-[22px] text-white ">
              Itineraries
            </h2>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PlaceBanner;
