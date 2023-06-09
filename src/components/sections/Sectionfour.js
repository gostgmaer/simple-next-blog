import Link from "next/link";
import Image from "next/image";
import Auther from "../childs/Auther";

import Error from "../error/Error";
import Loading from "../loaderscreen/Loading";
import PostItem from "../childs/PostItem";
const Sectionfour = ({ data, isLoading, isError }) => {
  if (isLoading) {
    return <Loading />;
  }
  if (isError) {
    return <Error />;
  }
  return (
    <section className="py-16 container mx-auto md:px-20">
      <div className="grid lg:grid-cols-2 gap-10">
        <div className="item">
          <h2 className=" font-bold text-2xl py-12 text-center">Business</h2>
          <div className="flex flex-col gap-6">
            {data
              ?.filter((i) => i.category == "Business, Travel")
              .map((post) => (
                <PostItem cate key={post.id} data={post} />
              ))}
          </div>
        </div>
        <div className="item">
          <h2 className=" font-bold text-2xl py-12 text-center">Travel</h2>
          <div className="flex flex-col gap-6">
            {data
              ?.filter((i) => i.category == "Business, Travel")
              .map((post) => (
                <PostItem cate key={post.id} data={post} />
              ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Sectionfour;
