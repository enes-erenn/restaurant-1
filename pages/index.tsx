import type { NextPage } from "next";
import AboutUs from "../components/AboutUs";
import Header from "../components/Header";
import Menu from "../components/Menu";
import Navbar from "../components/Navbar";

const Home: NextPage = () => {
  return (
    <>
      <Navbar />
      <Header />
      <AboutUs />
      <Menu />
    </>
  );
};

export default Home;
