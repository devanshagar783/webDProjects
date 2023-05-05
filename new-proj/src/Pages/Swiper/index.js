import React from "react";
import Swiper1 from "./Swiper1";
import Swiper2 from "./Swiper2";
import Swiper3 from "./Swiper3";
import Swiper4 from "./Swiper4";

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
      {/* <div>
        Swiper 4
        <Swiper4 />
      </div> */}
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