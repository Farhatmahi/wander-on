import React from "react";
import { FreeMode, Navigation } from "swiper";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Swiper, SwiperSlide } from "swiper/react";
import Reviews from "../../Components/Reviews";

const Testimonial = () => {
  return (
    <div className="container mx-auto p-4 md:p-0">
      <h1 className="font-semibold text-[4vw] lg:text-4xl text-accent  uppercase">
        Testimonials
      </h1>
      <p className="font-normal text-[3vw] lg:text-[22px] text-accent  px-6 pb-2  ">
        Awesome experiences! Happy Customers!
      </p>
      <Swiper
        cssMode={true}
        slidesPerView={1}
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
            slidesPerView: 1,
            spaceBetween: 10,
          },
        }}
      >
        <SwiperSlide className="flex justify-center">
          <iframe
            width="820"
            height="461"
            src="https://www.youtube.com/embed/BagUzmZTJ58"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowfullscreen
          />
        </SwiperSlide>
        <SwiperSlide className="flex justify-center">
          <iframe
            width="820"
            height="461"
            src="https://www.youtube.com/embed/McGn40BJdtY"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowfullscreen
          />
        </SwiperSlide>
        <SwiperSlide className="flex justify-center">
          <iframe
            width="820"
            height="461"
            src="https://www.youtube.com/embed/McGn40BJdtY"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowfullscreen
          />
        </SwiperSlide>
      </Swiper>
      <Reviews />
    </div>
  );
};

export default Testimonial;
