import React from 'react'
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import slides from "../mock.json";
import "./index.css";
import { A11y, Navigation, Pagination, Scrollbar } from "swiper";
import { ArrowLeftRounded, ArrowBack } from "@mui/icons-material";

const Swiper1 = () => {
  return (
    <div>
      <Swiper
          modules={[Navigation, Pagination, Scrollbar, A11y]}
          spaceBetween={50}
          slidesPerView={1}
          navigation={{
            nextEl: ".swiper-arrow-rights",
            prevEl: ".swiper-arrow-lefts",
          }}
          // dynamic bullets affect the bullets display - dynamicBullets:true
          //  type: 'progressbar' adds a progessbar on top
          //  type: 'fraction' adds a fraction instead of bullets
          pagination={{ clickable: true, dynamicBullets:true }}
          scrollbar={{ draggable: true }}
          onSlideChange={() => console.log("slide change")}
          onSwiper={(swiper) => console.log(swiper)}
        >
          {slides.map((slide) => {
            return (
              <SwiperSlide key={slide.image}>
                {({ isActive }) => {
                  console.log("devaa", isActive, slide.title);
                  return (
                    <img
                      className="swiper1"
                      src={slide.image}
                      alt={slide.title}
                    />
                  );
                }}
              </SwiperSlide>
            );
          })}
          {/* <SwiperSlide>Slide 1</SwiperSlide>
        <SwiperSlide>Slide 2</SwiperSlide>
        <SwiperSlide>Slide 3</SwiperSlide>
        <SwiperSlide>Slide 4</SwiperSlide> */}

          {/* check if css needs to be implemented as well */}
          <div className="swiper-arrow-rights">
            <ArrowLeftRounded />
          </div>
          <div className="swiper-arrow-lefts">
            <ArrowBack />
          </div>
        </Swiper>
    </div>
  )
}

export default Swiper1
