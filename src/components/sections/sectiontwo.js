import { useFetcher } from "@/lib/fetcher";
import { getPost } from "@/lib/helper";
import Image from "next/image";
import Link from "next/link";
import Auther from "../childs/Auther";
import Error from "../error/Error";
import Loading from "../loaderscreen/Loading";

const Sectiontwo = ({ data, isLoading, isError }) => {
  // getPost('post',69).then(res=>console.log(res))
  // const { data, isError, isLoading } = useFetcher("post");

  // console.log(getPost('post'));
  if (isLoading) {
    return <Loading />;
  }
  if (isError) {
    return <Error />;
  }
  return (
    <section className="py-16 container mx-auto md:px-20">
      <h2 className=" font-bold text-4xl py-12 text-center">Latest Posts</h2>
      <div className=" grid md:grid-cols-2 lg:grid-cols-3 gap-10">
        {data?.map((item) => (
          <Post key={item.id} data={item} />
        ))}
      </div>
    </section>
  );
};

export default Sectiontwo;

const Post = ({ data }) => {
  return (
    <div className="item">
      <div className="images">
        <Link href={`/post/${data.id}`}>
          <Image
            src={data.img}
            alt=""
            className="rounded"
            width={"600"}
            height={"600"}
          />
        </Link>
      </div>
      <div className="info justify-center flex flex-col py-4">
        <div className="category">
          {
            <Link
              className=" text-orange-600 hover:text-orange-800 "
              href={"/cate"}
            >
              {data.category}
            </Link>
          }
          <Link className=" text-grey-600 hover:text-grey-800" href={"/cate"}>
            - {data.published}
          </Link>
        </div>
        <div className="title">
          <Link
            href={`/post/${data.id}`}
            className=" text-xl font-bold text-gray-800 hover:text-gray-600"
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
