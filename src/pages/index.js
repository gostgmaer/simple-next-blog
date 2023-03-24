import Head from "next/head";

import { Inter } from "next/font/google";
import Format from "@/layout";
import Sectionone from "@/components/sections/Sectionone";
import Sectiontwo from "@/components/sections/sectiontwo";
import Sectionthree from "@/components/sections/Sectionthree";
import Sectionfour from "@/components/sections/Sectionfour";
import { useFetcher } from "@/lib/fetcher";

export default function Home() {
  const { data, isError, isLoading } = useFetcher("post");
  return (
    <Format>
      <Sectionone />
      <Sectiontwo data={data} />
      <Sectionthree />
      <Sectionfour data={data} />
    </Format>
  );
}
