import Head from "next/head";

import About from "../components/about";
import ImageCarousel from "../components/Carousel";
import Column from "../components/column";
import Footer from "../components/footer";
import Header from "../components/header/";

export default function Home() {
  return (
    <div>
      <Head>
        <title>San Fernando, Pampanga</title>
      </Head>
      <Header />
      <About />
      <Column />
      <Column reverse />
      <ImageCarousel />
      <Footer />
    </div>
  );
}
