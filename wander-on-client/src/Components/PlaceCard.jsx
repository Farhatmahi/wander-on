import React from "react";

const PlaceCard = ({ place }) => {
  return (
    <a href={`place/${place.name}`}>
      <div
        className="bg-cover bg-center rounded-2xl scale-95 duration-200 hover:scale-100"
        style={{ backgroundImage: `url(${place.image})` }}
      >
        <div className="relative w-full h-[80vw] lg:h-[30vw] rounded-xl flex justify-center items-center">
          <div className="absolute bottom-0 left-0 w-full h-full bg-gradient-to-b from-transparent via-transparent to-[#00000040] bg-opacity-100 rounded-2xl"></div>
          <div className="border px-4 py-2 border-white bg-[#00000040]">
            <h1 className="text-white text-[29px] font-semibold  uppercase">
              {place.name}
            </h1>
          </div>
        </div>
      </div>
    </a>
  );
};

export default PlaceCard;
