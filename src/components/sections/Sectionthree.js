import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCode, { Autoplay, Pagination, Navigation } from "swiper";
import Image from "next/image";
import "swiper/css";
import "swiper/css/pagination";
import Auther from "../childs/Auther";
import Link from "next/link";
const Sectionthree = () => {
  return (
    <section className="py-16 container mx-auto md:px-20">
      <h2 className=" font-bold text-4xl py-12 text-center">Most Popular</h2>
      <Swiper
        spaceBetween={50}
        slidesPerView={2}
        autoplay={{ delay: 2000 }}
        loop={true}
        pagination={{
          clickable: true,
        }}
       
        modules={[Pagination]}
      >
        <SwiperSlide>
          <Post />
        </SwiperSlide>
        <SwiperSlide>
          <Post />
        </SwiperSlide>
        <SwiperSlide>
          <Post />
        </SwiperSlide>
        <SwiperSlide>
          <Post />
        </SwiperSlide>
        <SwiperSlide>
          <Post />
        </SwiperSlide>
        <SwiperSlide>
          <Post />
        </SwiperSlide>
      </Swiper>
    </section>
  );
};

export default Sectionthree;

const Post = () => {
  return (
    <div className="item">
      <div className="images">
        <Link href={"/"}>
          <Image
            src={"/assets/images/img1.jpg"}
            alt=""
            className=""
            width={"600"}
            height={"600"}
          />
        </Link>
      </div>
      <div className="info justify-center flex flex-col py-4">
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
            className=" text-3xl md:text-4xl font-bold text-gray-800 hover:text-gray-600"
          >
            You have been logged out due to inactivity.
          </Link>
          <p className=" text-gray-500 py-0">
            {" "}
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque
            quidem temporibus doloribus in at ipsum animi deserunt sequi
          </p>
          <Auther />
        </div>
      </div>
    </div>
  );
};
