import type { NextPage } from "next";
import AboutUs from "../components/AboutUs";
import Header from "../components/Header";
import Navbar from "../components/Navbar";

const Home: NextPage = () => {
  return (
    <>
      <Navbar />
      <Header />
      <AboutUs />
    </>
  );
};

export default Home;
