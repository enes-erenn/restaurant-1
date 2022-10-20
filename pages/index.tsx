import type { NextPage } from "next";
import Header from "../components/Header";
import Navbar from "../components/Navbar";

const Home: NextPage = () => {
  return (
    <>
      <Navbar />
      <Header />
    </>
  );
};

export default Home;
