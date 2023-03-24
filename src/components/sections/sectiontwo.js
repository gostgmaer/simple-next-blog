import Image from "next/image";
import Link from "next/link";
import Auther from "../childs/Auther";

const Sectiontwo = () => {
  return (
    <section className="py-16 container mx-auto md:px-20">
      <h2 className=" font-bold text-4xl py-12 text-center">Latest Posts</h2>
      <div className=" grid md:grid-cols-2 lg:grid-cols-3 gap-10">
        <Post />
        <Post />
        <Post />
        <Post />
        <Post /> 
        <Post />
      </div>
    </section>
  );
};

export default Sectiontwo;

const Post = () => {
  return (
    <div className="item">
      <div className="images">
        <Link href={"/"}>
          <Image
            src={"/assets/images/img1.jpg"}
            alt=""
            className="rounded"
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
            className=" text-xl font-bold text-gray-800 hover:text-gray-600"
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
