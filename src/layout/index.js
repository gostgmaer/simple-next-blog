import Footer from "@/components/footer";
import Header from "@/components/Header/Header";
import Head from "next/head";

const Format = ({ children }) => {
  return (
    <>
      <Head>
        <title>Gost Block</title>
      </Head>
      <Header />
      <main>{children}</main>
      <Footer />
    </>
  );
};

export default Format;
