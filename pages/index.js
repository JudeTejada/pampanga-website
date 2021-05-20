import Head from "next/head";

import About from "../components/about";
import ImageCarousel from "../components/Carousel";
import Column from "../components/column";
import Footer from "../components/footer";
import Header from "../components/header/";
import VideIntro from "../components/videoIntro";
import Hotels from "../components/Hotels/index";

import { Title } from "../components/reusables";

export default function Home() {
  const places = [
    "/3pic.jpg",
    "/4pic.jpg",
    "/5pic.jpg",
    "/6pic.jpg",
    "/7pic.jpg",
    "/8pic.jpg",
    "/9pic.jpg",
    "/10pic.jpg",
  ];
  const foods = [
    "/food1.jpg",
    "/food2.jpg",
    "/food3.jpg",
    "/food4.jpg",
    "/food5.jpg",
  ];

  const hotel1 = [
    "/gp/gp1.webp",
    "/gp/gp2.webp",
    "/gp/gp3.webp",
    "/gp/gp4.webp",
  ];

  const hotel2 = [
    "/rd/rd1.webp",
    "/rd/rd2.webp",
    "/rd/rd3.webp",
    "/rd/rd4.webp",
  ];

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
      <Column
        title="Philippine International Hot Air Balloon Fiesta"
        description="The Philippine International Hot Air Balloon Fiesta is an annual four-day event held between January and February in Clark Freeport Zone, Angeles, Pampanga. It is the biggest and longest-running aviation sports event in the Philippines."
        photo="/feature3.jpg"
      />
      <div style={{margin:'12rem 0'}}>
        <Title>Hotels in San Fernando pampanga</Title>
        <Hotels
          title="GD suites"
          description="GDSuites offers accomodation in San Fernando, 4.4km form kingsborough International Convention Center. It is Located 4.1km from LausGroup Event Centre and provides free wifi and free private parking"
          list={hotel1}
        />
        <Hotels
          title="RedDoorz Plus"
          description="Offering free wifi, RedDoorz Plus @ Casa Lucia Sindalan San Fernando City Pampanga offers rooms in San Fernando, 8km from LausGrouent Centre."
          list={hotel2}
        />
      </div>

      <ImageCarousel title="Food Delicacies 🍴 " list={foods} />
      <ImageCarousel
        list={places}
        title="The Good ol places 🌟"
        description={`Lies the pictures of The Place San Fernando Pampanga where you can see
          some snapshot of the pace`}
      />
      <VideIntro />
      <Footer />
    </div>
  );
}
