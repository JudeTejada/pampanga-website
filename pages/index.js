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
      <Column
        photo="/featured1.jpg"
        description="Sky Ranch is a network of amusement parks in the Philippines. Sky Ranch has three branches; in Tagaytay, San Fernando, Pampanga, and in Baguio. The first Sky Ranch amusement park opened in Tagaytay in 2013. "
        title="Sky Ranch Pampanga"
      />
      <Column
        title="St. James the Apostle Parish Church - Betis Church"
        description="The St. James the Apostle Parish Church, commonly known as Betis Church, is a Baroque style church located in the Betis District in Guagua in Pampanga, Philippines under the Roman Catholic Archdiocese of San Fernando. The church was established in 1607 and dedicated to Saint James, the Apostle. It was declared a National Cultural Treasure by the National Museum and the National Commission for Culture and the Arts."
        photo="/featured2.jpg"
        reverse
      />
      <ImageCarousel />
      <Footer />
    </div>
  );
}
