import React from "react";
import instaGram from "../images/instagram.svg";
import linkedIn from "../images/linkedin.svg";

const TeamCard = ({ team_member }) => {
  const { name, image, instagram, linkedin, position, description } =
    team_member;
  return (
    <div className="text-[#4a4a4a]">
      <div className="avatar">
        <div className="w-[24vw] lg:w-[10vw] rounded-full drop-shadow-lg">
          <img src={image} alt={name + "pic"} />
        </div>
      </div>
      <h1 className="text-[3.5vw] lg:text-[2vw] font-semibold">{name}</h1>
      <h2 className="text-[3vw] lg:text-[1vw] font-extralight">{position}</h2>
      {instagram && linkedin && (
        <div className="flex justify-center items-center my-2">
          <a href={linkedIn}>
            <img src={linkedIn} className="w-4 mr-2" alt="" />
          </a>
          <a href={instagram}>
            <img src={instaGram} className="w-4" alt="" />
          </a>
        </div>
      )}
      <p className="text-[2.5vw] lg:text-[1vw] font-extralight pt-4 text-left p-4">
        {description}
      </p>
    </div>
  );
};

export default TeamCard;
