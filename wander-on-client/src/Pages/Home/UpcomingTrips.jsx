import React from "react";
import { useQuery } from "@tanstack/react-query";
import { FreeMode, Navigation } from "swiper";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Swiper, SwiperSlide } from "swiper/react";
import TripCard from "../../Components/TripCard";
import { useState } from "react";
import { useEffect } from "react";

const UpcomingTrips = () => {
  const [trips, setTrips] = useState();

  useEffect(() => {
    fetch(
      "http://localhost:4000/trip/trip-filtered-by-category?category=upcoming"
    )
      .then((res) => res.json())
      .then((data) => setTrips(data));
  }, []);

  return (
    <div className="container mx-auto px-4 md:px-0">
      <h1 className="font-semibold text-left text-[15px] lg:text-4xl text-accent ">
        Upcoming Trip
      </h1>
      <Swiper
        cssMode={true}
        slidesPerView={4}
        navigation={true}
        spaceBetween={30}
        freeMode={true}
        modules={[Navigation, FreeMode]}
        className="mySwiper"
        breakpoints={{
          320: {
            slidesPerView: 1,
            spaceBetween: 10,
          },
          // when window width is <= 480px
          480: {
            slidesPerView: 1,
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
        {trips?.map((trip) => (
          <SwiperSlide>
            <TripCard key={trip._id} trip={trip} />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default UpcomingTrips;
