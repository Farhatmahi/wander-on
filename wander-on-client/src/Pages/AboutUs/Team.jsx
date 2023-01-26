import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import TeamCard from "../../Components/TeamCard";
import { FreeMode, Navigation } from "swiper";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Swiper, SwiperSlide } from "swiper/react";

const Team = () => {
  const [team, setTeam] = useState([]);
  useEffect(() => {
    fetch("Team.json")
      .then((res) => res.json())
      .then((data) => setTeam(data));
  }, []);

  console.log(team);

  return (
    <div className=" container mx-auto px-4 md:px-0">
      <h1 className="text-[5vw] lg:text-[2vw] font-semibold lg:py-8 pb-4">
        Meet Our Team. The ideal set of extraordinary people
      </h1>
      <div className="hidden lg:grid grid-cols-3 gap-6">
        {team.map((team_member) => (
          <TeamCard key={team._id} team_member={team_member} />
        ))}
      </div>
      <Swiper
        cssMode={true}
        slidesPerView={4}
        navigation={true}
        spaceBetween={30}
        freeMode={true}
        modules={[Navigation, FreeMode]}
        className="mySwiper lg:hidden"
        breakpoints={{
          320: {
            slidesPerView: 2,
            spaceBetween: 10,
          },
          // when window width is <= 480px
          480: {
            slidesPerView: 2,
            spaceBetween: 10,
          },

          // when window width is <= 640px
          640: {
            slidesPerView: 2,
            spaceBetween: 10,
          },
          768: {
            slidesPerView: 4,
            spaceBetween: 10,
          },
          1024: {
            slidesPerView: 4,
            spaceBetween: 10,
          },
        }}
      >
        {team.map((team_member) => (
          <SwiperSlide>
            <TeamCard key={team._id} team_member={team_member} />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Team;
