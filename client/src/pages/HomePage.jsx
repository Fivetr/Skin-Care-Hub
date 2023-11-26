import React from "react";
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";
import Carousel from "../components/Description/Carousel";
import Blogs from "../components/Description/Blogs";

function HomePage() {
  return (
    <>
      <Header />
      <section className="tw-flex tw-justify-center tw-text-xl">
        <Carousel className="w-100" />
      </section>
      <section className="tw-flex tw-justify-center tw-text-xl">
        <Blogs className="w-100" />
      </section>
      <Footer />
    </>
  );
}

export default HomePage;
