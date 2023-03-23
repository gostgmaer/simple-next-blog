import Head from "next/head";

import { Inter } from "next/font/google";
import Format from "@/layout";
import Sectionone from "@/components/sections/Sectionone";


export default function Home() {
  return (
    <Format>
   <Sectionone/>
    </Format>
  );
}
