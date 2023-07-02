import Head from "next/head";

import { Inter } from "next/font/google";
import Format from "@/layout";
import Sectionone from "@/components/sections/Sectionone";
import Sectiontwo from "@/components/sections/sectiontwo";
import Sectionthree from "@/components/sections/Sectionthree";
import Sectionfour from "@/components/sections/Sectionfour";
import { useFetcher } from "@/lib/fetcher";
import { invokeExternalAPI } from "@/lib/http";

export default function Home(props) {
  console.log(props);
  const { data, isError, isLoading } = useFetcher("post");
  
  return (
    <Format>
      <Sectionone />
      <Sectiontwo data={props.posts}/>
      <Sectionthree />
      <Sectionfour data={data} isLoading={isLoading} isError={isError} />
    </Format>
  );
}


export async function getStaticProps(ctx) {
  const posts = await invokeExternalAPI("/wp/v2/posts?per_page=9",'get',{},{},{});

  return {
    props: {
      posts
    },
  };
}

// export async function getStaticPaths() {
//   const posts = await getPost("post");
//   const paths = posts.map((item) => {
//     return { params: { postId: item.id.toString() } };
//   });

//   return {
//     paths,
//     fallback: false,
//   };
// }
