import Head from "next/head";

import { Inter } from "next/font/google";
import Format from "@/layout";
import Sectionone from "@/components/sections/Sectionone";
import Sectiontwo from "@/components/sections/sectiontwo";
import Sectionthree from "@/components/sections/Sectionthree";
import Sectionfour from "@/components/sections/Sectionfour";

export default function Home() {
  return (
    <Format>
      <Sectionone />
      <Sectiontwo />
      <Sectionthree />
      <Sectionfour />
    </Format>
  );
}
