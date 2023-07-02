import { useFetcher } from "@/lib/fetcher";
import { getPost } from "@/lib/helper";
import Image from "next/image";
import Link from "next/link";
import Auther from "../childs/Auther";
import Error from "../error/Error";
import Loading from "../loaderscreen/Loading";

const Sectiontwo = ({ data }) => {
 
  console.log(data);
  return (
    <section className="py-16 container mx-auto md:px-20">
      <h2 className=" font-bold text-4xl py-12 text-center">Latest Posts</h2>
      <div className=" grid md:grid-cols-2 lg:grid-cols-3 gap-10">
        {data?.data?.map((item) => (
          <Post key={item.id} data={item} />
        ))}
      </div>
    </section>
  );
};

export default Sectiontwo;

const Post = ({ data }) => {
  console.log(data.featured_image_urls.medium[0]);
  return (
    <div className="item">
      <div className="images">
        <Link href={`/post/${data.id}`}>
        <img src={`${data.featured_image_urls.medium[0]}`} alt="asdasd" />
        {/* <Image
            src={`${data.featured_image_urls.medium[0]}`}
            alt=""
            className="rounded"
            width={"600"}
            height={"600"}
          /> */}
        </Link>
      </div>
      <div className="info justify-center flex flex-col py-4">
        <div className="category">
          {
            <Link
              className=" text-orange-600 hover:text-orange-800 "
              href={"/cate"}
            
            >
              {}
            </Link>
          }
          <Link className=" text-grey-600 hover:text-grey-800" href={"/cate"}>
            {/* - {data.published} */}
          </Link>
        </div>
        <div className="title">
          <Link
            href={`/post/${data.slug}`}
            className=" text-xl font-bold text-gray-800 hover:text-gray-600"
          >
            {data.title.rendered}
          </Link>
          {/* <p className=" text-gray-500 py-0">{data.subtitle}</p> */}
          {/* <Auther user={data.author_info.name} /> */}
        </div>
      </div>
    </div>
  );
};
