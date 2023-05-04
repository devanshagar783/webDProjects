import React, { useState } from "react";
import img1 from "./assets/slider01.jpg";
import img2 from "./assets/slider02.jpg";
import img3 from "./assets/slider03.jpg";
import img4 from "./assets/slider04.jpg";
import img5 from "./assets/slider05.jpg";
import img6 from "./assets/slider06.jpg";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/thumbs";
import "./index.scss";
import { Navigation, Thumbs } from "swiper";

const Swiper2 = () => {
  const images = [img1, img2, img3, img4, img5, img6];
  const [activeThumb, setActiveThumb] = useState();
  return (
    <div>
      <Swiper
        loop
        spaceBetween={10}
        navigation
        modules={[Navigation, Thumbs]}
        grabCursor
        thumbs={{swiper: activeThumb}}
        className="product-images-slider"
      >
        {images.map((item, index) => (
          <SwiperSlide key={index}>
            <img src={item} alt="" />
          </SwiperSlide>
        ))}
      </Swiper>
      <Swiper
        loop
        onSwiper={setActiveThumb}
        spaceBetween={10}
        slidesPerView={4}
        watchSlidesProgress
        modules={[Navigation, Thumbs]}
        className="product-images-slider-thumbs"
      >
        {images.map((item, index) => (
          <SwiperSlide key={index}>
            <div className="product-images-slider-thumbs-wrapper">
              <img src={item} alt="" />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Swiper2;
