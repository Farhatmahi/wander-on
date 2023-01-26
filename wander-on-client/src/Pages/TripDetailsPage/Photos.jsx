import React from "react";
import DoubleText from "../../Components/DoubleText";
import { FreeMode, Navigation } from "swiper";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Swiper, SwiperSlide } from "swiper/react";

const Photos = ({ photos }) => {

  return (
    <div>
      <DoubleText text={"photos"} />
      <Swiper
        cssMode={true}
        slidesPerView={2}
        navigation={true}
        spaceBetween={30}
        freeMode={true}
        modules={[Navigation, FreeMode]}
        className="mySwiper"
      >
        {photos?.map((photo) => (
          <SwiperSlide>
            <figure className=" w-full h-64"> 
            <img src={photo} className='w-full h-full object-cover rounded-2xl' alt="" />
            </figure>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Photos;
