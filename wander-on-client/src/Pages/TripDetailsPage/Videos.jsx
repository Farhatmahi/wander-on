import React from "react";
import DoubleText from "../../Components/DoubleText";
import { FreeMode, Navigation } from "swiper";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Swiper, SwiperSlide } from "swiper/react";

const Videos = ({ videos }) => {
  console.log(videos);
  return (
    <div>
      <DoubleText text={"videos"} />
      <Swiper
        cssMode={true}
        slidesPerView={2}
        navigation={true}
        spaceBetween={30}
        freeMode={true}
        modules={[Navigation, FreeMode]}
        className="mySwiper"
      >
        {videos?.map((video) => (
          <SwiperSlide>
            <iframe
              width="432"
              height="243"
              src={video}
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowfullscreen
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Videos;
