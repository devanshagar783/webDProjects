import React from "react";
import Swiper1 from "./Swiper1";
import Swiper2 from "./Swiper2";
import Swiper3 from "./Swiper3";
import Swiper4 from "./Swiper4";
import Swiper5 from "./Swiper5";

const SwiperJS = () => {
  return (
    <>
      <div>
        Swiper 1
        <Swiper1 />
      </div>
      <div>
        Swiper 3
        <Swiper3 />
      </div>
      <div>
        Swiper 5
        <Swiper5 />
      </div>
      <div>
        Swiper 4
        <Swiper4 />
      </div>
      <div>
        Swiper 2
        <Swiper2 />
      </div>
    </>
  );
};

export default SwiperJS;


//navigation - arrows
//pagination - bottom dots


//add this to autoplay slides
// autoplay={{
//   delay: 2500,
//   disableOnInteraction: false,
// }}
// for progress of this search website

