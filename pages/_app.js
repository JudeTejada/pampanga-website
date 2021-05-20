import Head from "next/head";

import { GlobalStyle } from "../theme/";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import "../theme/slider.css";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <GlobalStyle />
      <Head>
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Lato:wght@300;400;700&display=swap"
          rel="stylesheet"
        />
      </Head>
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
