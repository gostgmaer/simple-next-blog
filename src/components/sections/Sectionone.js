import Image from "next/image";
import Link from "next/link";
import React from "react";
import Auther from "../childs/Auther";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCode, { Autoplay, Pagination, Navigation } from "swiper";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import Error from "../error/Error";
import { useFetcher } from "@/lib/fetcher";
import Loading from "../loaderscreen/Loading";
const Sectionone = () => {
  const bg = {
    background: 'url("/assets/images/banner.png")',
    backgroundPosition: "right",
    backgroundRepeat: "no-repeat",
  };

  SwiperCode.use([Autoplay]);
  const { data, isError, isLoading } = useFetcher("trending");
  if (isLoading) {
    return <Loading />;
  }
  if (isError) {
    return <Error/>;
  }
  return (
    <section className="py-10" style={bg}>
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
        {data?.map((item) => (
          <SwiperSlide key={item.id}>
            {" "}
            <Slider data={item} />{" "}
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default Sectionone;

const Slider = ({ data }) => {
  return (
    <div className="  md:px-20 grid md:grid-cols-2">
      <div className=" images">
        <Link href={`/post/${data.id}`}>
          <Image
            src={data.img}
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
            {data.category}
          </Link>
          <Link className=" text-grey-600 hover:text-grey-800" href={"/cate"}>
            - {data.published}
          </Link>
        </div>
        <div className="title">
          <Link
            href={`/post/${data.id}`}
            className=" text-2xl md:text-5xl font-bold text-gray-800 hover:text-gray-600"
          >
            {data.title}
          </Link>
          <p className=" text-gray-500 py-0">{data.subtitle}</p>
          <Auther user={data.author} />
        </div>
      </div>
    </div>
  );
};
