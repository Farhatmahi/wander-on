import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { useLoaderData } from "react-router-dom";
import Reviews from "../../../Components/Reviews";
import SecretSauce from "../../Home/SecretSauce";
import TalkToExpert from "../../Home/TalkToExpert";
import Testimonial from "../../Home/Testimonial";
import IconWithText from "../IconWithText";
import PlaceBanner from "../PlaceBanner";
import { FreeMode, Navigation } from "swiper";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Swiper, SwiperSlide } from "swiper/react";

import TripCardInsidePlace from "../../../Components/TripCardInsidePlace";

const PlaceDetailPage = () => {
  const place = useLoaderData();

  const [trips, setTrips] = useState([]);
  useEffect(() => {
    fetch(`http://localhost:4000/trip/trip-filtered-by-place/${place?.name}`)
      .then((res) => res.json())
      .then((data) => setTrips(data));
  }, [place.name]);

  console.log(trips);

  return (
    <div className="space-y-20">
      <PlaceBanner place={place} />
      <IconWithText />
      <div className="container mx-auto px-4 md:px-0">
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
              <TripCardInsidePlace key={trip._id} trip={trip} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
      <SecretSauce />
      <Testimonial />
      <Reviews />
      <TalkToExpert />
    </div>
  );
};

export default PlaceDetailPage;
