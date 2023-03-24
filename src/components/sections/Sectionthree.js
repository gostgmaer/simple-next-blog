import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCode, { Autoplay, Pagination, Navigation } from "swiper";
import Image from "next/image";
import "swiper/css";
import "swiper/css/pagination";
import Auther from "../childs/Auther";
import Link from "next/link";
import { useFetcher } from "@/lib/fetcher";
import Loading from "../loaderscreen/Loading";
import Error from "../error/Error";
const Sectionthree = () => {

  const { data, isError, isLoading } = useFetcher("popular");
  if (isLoading) {
    return <Loading />;
  }
  if (isError) {
    return <Error/>;
  }
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
       {data?.map((item) => (
          <SwiperSlide key={item.id}>
        
            <Post data={item} />{" "}
          </SwiperSlide>
        ))}
        
      </Swiper>
    </section>
  );
};

export default Sectionthree;

const Post = ({data}) => {
  return (
    <div className="item">
      <div className="images">
        <Link href={`/post/${data.id}`}>
          <Image
            src={data.img}
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
             {data.category}
          </Link>
          <Link className=" text-grey-600 hover:text-grey-800" href={"/cate"}>
            - {data.published}
          </Link>
        </div>
        <div className="title">
          <Link
            href={`/post/${data.id}`}
            className=" text-3xl md:text-4xl font-bold text-gray-800 hover:text-gray-600"
          >
           {data.title}
          </Link> </div>
          <p className=" text-gray-500 py-0">
          {data.subtitle}
          </p>
          <Auther user={data.author} />
       
      </div>
    </div>
  );
};
