import React, { useEffect } from "react";
import { FreeMode, Navigation } from "swiper";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Swiper, SwiperSlide } from "swiper/react";
import { useState } from "react";
import PlaceCard from "../../Components/PlaceCard";

const CustomiseTrip = () => {
  const [places, setPlaces] = useState([]);
  useEffect(() => {
    fetch("http://localhost:4000/trip/get-places")
      .then((res) => res.json())
      .then((data) => setPlaces(data));
  }, []);

  return (
    <div className="container mx-auto p-4 md:p-0">
      <h1 className="font-semibold text-[15px] lg:text-4xl text-accent ">
        CUSTOMISE YOUR TRIP
      </h1>
      <p className="font-normal text-[11px] lg:text-[22px] text-accent  px-6 lg:pb-4">
        Didn't find what you were looking for? Have a look at our customized
        trips curated for your group and plan your next vacation with WanderOn!
      </p>
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
        {places.map((place) => (
          <SwiperSlide>
            <PlaceCard key={place._id} place={place} />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default CustomiseTrip;
