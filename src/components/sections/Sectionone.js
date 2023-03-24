import Image from "next/image";
import Link from "next/link";
import React from "react";
import Auther from "../childs/Auther";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCode, { Autoplay, Pagination, Navigation } from "swiper";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
const Sectionone = () => {
  const bg = {
    background: 'url("/assets/images/banner.png")',
    backgroundPosition: "right",
    backgroundRepeat: "no-repeat",
  };

  SwiperCode.use([Autoplay]);

  return (
    <section className="py-16 " style={bg}>
      <div className="container mx-auto md:px-20">
        <h2 className=" font-bold text-4xl pb-12 text-center">Trending</h2>
      </div>
      <Swiper
        spaceBetween={50}
        slidesPerView={1}
        autoplay={{ delay: 2000 }}
        loop={true}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Pagination, Navigation]}
      >
        <SwiperSlide>
          <Slider />
        </SwiperSlide>
        <SwiperSlide>
          <Slider />
        </SwiperSlide>
        <SwiperSlide>
          <Slider />
        </SwiperSlide>
        <SwiperSlide>
          <Slider />
        </SwiperSlide>
        <SwiperSlide>
          <Slider />
        </SwiperSlide>
        <SwiperSlide>
          <Slider />
        </SwiperSlide>
        <SwiperSlide>
          <Slider />
        </SwiperSlide>
        <SwiperSlide>
          <Slider />
        </SwiperSlide>
        <SwiperSlide>
          <Slider />
        </SwiperSlide>
        <SwiperSlide>
          <Slider />
        </SwiperSlide>
        <SwiperSlide>
          <Slider />
        </SwiperSlide>
        <SwiperSlide>
          <Slider />
        </SwiperSlide>
      </Swiper>
    </section>
  );
};

export default Sectionone;

const Slider = () => {
  return (
    <div className="  md:px-20 grid md:grid-cols-2">
      <div className=" images">
        <Link href={"/posts"}>
          <Image
            src={"/assets/images/img1.jpg"}
            alt=""
            className=" rounded"
            width={"500"}
            height={"320"}
          />
        </Link>
      </div>
      <div className="info flex justify-center px-4 flex-col">
        <div className="category">
          <Link
            className=" text-orange-600 hover:text-orange-800 "
            href={"/cate"}
          >
            Business, Travel
          </Link>
          <Link className=" text-grey-600 hover:text-grey-800" href={"/cate"}>
            - March 18, 2023
          </Link>
        </div>
        <div className="title">
          <Link
            href={"/"}
            className=" text-3xl md:text-6xl font-bold text-gray-800 hover:text-gray-600"
          >
            You have been logged out due to inactivity.
          </Link>
          <p className=" text-gray-500 py-0">
            {" "}
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque
            quidem temporibus doloribus in at ipsum animi deserunt sequi fugiat
            minima aperiam saepe sapiente aliquam fuga magni, optio, ea
            voluptate aut!
          </p>
          <Auther />
        </div>
      </div>
    </div>
  );
};
