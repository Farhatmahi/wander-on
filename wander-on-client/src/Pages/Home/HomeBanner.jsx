import React from "react";
import { Typewriter } from "react-simple-typewriter";
import travellers from "../../images/cover-travellers.svg";
import stars from "../../images/cover-star.svg";
import map from "../../images/cover-destination.svg";

const HomeBanner = () => {
  return (
    <div className="bg-hero h-screen bg-cover bg-no-repeat ">
      <div className="overlay"></div>
      <div className="flex flex-col justify-center items-center relative z-10">
        <h1 className="text-[26px] md:text-[50px]  font-semibold text-white pt-56">
          India's Coolest Travel Community
        </h1>
        <span className="text-[15px] md:text-[29px] font-semibold  text-white">
          <Typewriter
            words={[
              "Connecting People",
              "Creating Stories",
              "Creating Memories",
              "Fulfilling Adventure",
              "Spreading Happiness",
            ]}
            loop={100}
            cursor
            cursorStyle="|"
            typeSpeed={70}
            deleteSpeed={50}
            delaySpeed={1000}
          />
        </span>
        <div className="form-control mt-16">
          <div className="input-group input-group-lg">
            <input
              type="text"
              placeholder="Where do you wanna go?"
              className="input lg:input-lg w-[300px] lg:w-[600px] caret-white placeholder-white input-bordered border-primary focus:outline-none bg-[#ffffff60]"
            />
            <button className="btn btn-square lg:btn-lg bg-primary border-primary hover:bg-primary">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-8 w-8 text-white"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                />
              </svg>
            </button>
          </div>
        </div>
        <div className="flex justify-around items-center w-[300px] lg:w-[100vw] lg:px-24 pt-36 lg:pt-48">
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

export default HomeBanner;
