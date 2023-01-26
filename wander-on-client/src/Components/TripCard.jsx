import React from "react";
import { AiOutlineClockCircle } from "react-icons/ai";
import { FaMapMarkerAlt } from "react-icons/fa";

const TripCard = ({ trip }) => {
  return (
    <a href={`trip/${trip._id}`}>
      <div className="card scale-95 hover:scale-100 duration-200">
        <figure className="relative h-56">
          <img
            src={trip.thumbnail}
            alt="trip_thumbnail"
            className="rounded-2xl object-cover w-full h-full max-w-full max-h-full"
          />
          <div className="absolute bottom-0 left-0 w-full h-full bg-gradient-to-b from-transparent via-transparent to-[#000000] bg-opacity-100 rounded-2xl"></div>
          <div className="flex justify-between absolute bottom-0 text-white p-4">
            {trip?.options?.map((option) => (
              <p key={option._id} className="mr-4  text-[14px]">
                {option}
              </p>
            ))}
          </div>
          {/* {trip.save_percentage && <div className="absolute top-10 -left-5 bg-gradient-to-r from-black to-primary rounded-l-md p-1 text-white">{trip.save_percentage}</div>} */}
        </figure>
        <div className="pt-2 pb-4 px-2">
          <div className="card-actions justify-start space-x-2 pb-2">
            <div className="flex items-center text-secondary text-[14px] font-semibold ">
              <AiOutlineClockCircle className="inline text-xl mr-1" />
              {trip.duration}
            </div>
            <div className="flex items-center text-secondary text-[14px] font-semibold ">
              <FaMapMarkerAlt className="inline text-lg mr-1" />
              {trip.pickup_and_drop}
            </div>
          </div>
          <h2 className="card-title ">{trip.title}</h2>
          <div className="flex justify-between items-center">
            {trip.starting_price && (
              <p className="text-left text-sm ">
                Starts at{" "}
                <span className="font-semibold text-lg">
                  {trip.discount_price
                    ? trip.discount_price
                    : trip.starting_price}
                </span>
              </p>
            )}
            {/* {trip.discount_price && (
            <div className="text-sm  flex justify-between items-center">
              <p className="line-through pr-2">{trip.starting_price}</p>
              <span className="text-xs text-white bg-gradient-to-r from-black to-primary p-1 rounded-md">
                {trip.save_money} off
              </span>
            </div>
          )} */}
          </div>
          {trip.every_weekend && (
            <h1 className=" font-semibold text-left">
              Every Weekend Departures
              <br />
              {trip.every_weekend}
            </h1>
          )}
        </div>
      </div>
    </a>
  );
};

export default TripCard;
