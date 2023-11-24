import React from "react";
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";
import Carousel from "../components/Description/Carousel";
import MyBlogCarousel from "../components/Description/Blogs";


function HomePage() {
  return (
    <>
      <Header />
      <section className="tw-flex tw-tems-center tw-justify-center tw-text-xl tw-border-b">
        <Carousel className="w-100" />
      </section>
      <section className="tw-flex tw-items-center tw-justify-center tw-text-xl tw-h-screen">
        <MyBlogCarousel />
      </section>
      <Footer />
    </>
  );
}

export default HomePage;
