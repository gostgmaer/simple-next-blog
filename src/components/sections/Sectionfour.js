import Link from "next/link";
import Image from "next/image";
import Auther from "../childs/Auther";
const Sectionfour = () => {
  return (
    <section className="py-16 container mx-auto md:px-20">
      <div className="grid lg:grid-cols-2 gap-10">
        <div className="item">
          <h2 className=" font-bold text-2xl py-12 text-center">Business</h2>
          <div className="flex flex-col gap-6">
            <Post />
            <Post />
            <Post />
            <Post />
            <Post />
          </div>
        </div>
        <div className="item">
          <h2 className=" font-bold text-2xl py-12 text-center">Travel</h2>
          <div className="flex flex-col gap-6">
            <Post />
            <Post />
            <Post />
            <Post />
            <Post />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Sectionfour;

const Post = () => {
  return (
    <div className="flex gap-5">
      <div className="image flex flex-col justify-start">
        <Link href={"/"}>
          <Image
            src={"/assets/images/img1.jpg"}
            alt=""
            className="rounded"
            width={"300"}
            height={"260"}
          />
        </Link>
      </div>
      <div className="info flex justify-center flex-col">
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
            className=" text-xl font-bold text-gray-800 hover:text-gray-600"
          >
            You have been logged out due to inactivity.
          </Link>
        </div>
        <Auther />
      </div>
    </div>
  );
};
