import Auther from "@/components/childs/Auther";
import PostItem from "@/components/childs/Postlist";
import Error from "@/components/error/Error";
import Loading from "@/components/loaderscreen/Loading";
import Layout from "@/layout";
import { useFetcher } from "@/lib/fetcher";
import Image from "next/image";
import { useRouter } from "next/router";

const Post = () => {
  const route = useRouter();
  const { data, isError, isLoading } = useFetcher(`post/${route.query.postId}`);

  if (isLoading) {
    return <Loading />;
  }
  if (isError) {
    return <Error />;
  }

  return (
    <Layout>
      <section className=" container mx-auto md:px-2 py-16 w-1/2">
        <div className="flex justify-center">
          <Auther user={data?.author} />
        </div>
        <div className="post py-10">
          <h1 className=" font-bold text-4xl text-center">
            You have been logged out due to inactivity.
          </h1>
          <p className=" text-grey-500 text-center text-xl">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque
            quidem temporibus doloribus in at ipsum animi deserunt sequi
          </p>
          <div className="py-10">
            <Image
              src={"/assets/images/img1.jpg"}
              alt=""
              className="rounded"
              width={"900"}
              height={"600"}
            />
          </div>
          <div className="content text-gray-600 text-lg flex flex-col gap-5">
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dicta
              saepe atque corrupti libero molestias! Praesentium iure,
              consectetur ratione ex non repellendus voluptate in quas, eius quo
              dolores nisi ducimus ullam!
            </p>
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dicta
              saepe atque corrupti libero molestias! Praesentium iure,
              consectetur ratione ex non repellendus voluptate in quas, eius quo
              dolores nisi ducimus ullam!
            </p>
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dicta
              saepe atque corrupti libero molestias! Praesentium iure,
              consectetur ratione ex non repellendus voluptate in quas, eius quo
              dolores nisi ducimus ullam!
            </p>

            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dicta
              saepe atque corrupti libero molestias! Praesentium iure,
              consectetur ratione ex non repellendus voluptate in quas, eius quo
              dolores nisi ducimus ullam!
            </p>
          </div>
        </div>
        <div className="comment"></div>
        <div className="related py-10">
          <h2 className=" font-bold text-2xl py-12 text-start">
            Related Posts
          </h2>
          <div className="flex flex-col gap-6">
            {/* <PostItem />
            <PostItem />
            <PostItem />
            <PostItem />
            <PostItem /> */}
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Post;
