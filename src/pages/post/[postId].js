import Auther from "@/components/childs/Auther";
import PostList from "@/components/childs/Postlist";
import Error from "@/components/error/Error";
import Loading from "@/components/loaderscreen/Loading";
import Layout from "@/layout";
import { useFetcher } from "@/lib/fetcher";
import Image from "next/image";
import { useRouter } from "next/router";
import { SWRConfig } from "swr";
import { getPost } from "../../lib/helper";

export default function Post({ fallback }) {
  const route = useRouter();
  const { data, isError, isLoading } = useFetcher(`post/${route.query.postId}`);
  if (isLoading) {
    return <Loading />;
  }
  if (isError) {
    return <Error />;
  }
  if (route.isFallback) {
    return <Loading />;
  }
  return (
    <SWRConfig value={{ fallback }}>
      <Article data={data} />
    </SWRConfig>
  );
}

const Article = ({ data }) => {


  return (
    <Layout>
      <section className=" container mx-auto md:px-2 py-16 w-1/2">
        <div className="flex justify-center">
          <Auther user={data?.author} />
        </div>
        <div className="post py-10">
          <h1 className=" font-bold text-4xl text-center">{data.title}</h1>
          <p className=" text-grey-500 text-center text-xl">{data.subtitle}</p>
          <div className="py-10">
            <Image
              src={data.img}
              alt=""
              className="rounded"
              width={"900"}
              height={"600"}
            />
          </div>
          <div
            dangerouslySetInnerHTML={{ __html: data.description }}
            className="content whitespace-pre-line text-gray-600 text-lg flex flex-col gap-5"
          ></div>
        </div>
        <div className="comment"></div>
        <PostList endpoint={"post"} title={"Related Posts"} cate />
      </section>
    </Layout>
  );
};

export async function getStaticProps(ctx) {
  const posts = await getPost("post", ctx.params.postId);

  return {
    props: {
      fallback: {
        "/api/post": posts,
      },
    },
  };
}

export async function getStaticPaths() {
  const posts = await getPost("post");
  const paths = posts.map((item) => {
    return { params: { postId: item.id.toString() } };
  });

  return {
    paths,
    fallback: false,
  };
}
