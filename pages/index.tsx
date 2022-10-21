import type { NextPage } from "next";
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

const Home: NextPage = () => {
  return (
    <>
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
