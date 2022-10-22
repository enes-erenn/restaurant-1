import React, { useEffect } from "react";
import type { NextPage } from "next";
import Head from "next/head";
import AboutUs from "../components/AboutUs";
import Chef from "../components/Chef";
import FindUs from "../components/FindUs";
import Footer from "../components/Footer";
import Gallery from "../components/Gallery";
import Header from "../components/Header";
import Intro from "../components/Intro";
import Laurels from "../components/Laurels";
import Menu from "../components/Menu";
import Navbar from "../components/Navbar";
import aos from "aos";
import "aos/dist/aos.css";

const Home: NextPage = () => {
  useEffect(() => {
    aos.init({ offset: 120, duration: 400, easing: "ease" });
    aos.refresh();
  }, []);

  return (
    <>
      <Head>
        <title>BBQHOUSE | WE GRILL YOU CHILL</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <meta
          name="description"
          content="BBQ HOUSE | The one of the best BBQ HOUSE in the NEW YORK."
        />
        <meta
          name="keywords"
          content="BBQ, BBQ HOUSE, NEW, YORK, NEW YORK BBQ, barbeque"
        />
      </Head>
      <Navbar />
      <Header />
      <AboutUs />
      <Menu />
      <Chef />
      <Intro />
      <Laurels />
      <Gallery />
      <FindUs />
      <Footer />
    </>
  );
};

export default Home;
