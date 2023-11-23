import React, { useState, useEffect } from "react";
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";
import Carousel from "../components/Description/Carousel";

function HomePage() {
  return (
    <>
      <Header />
      <section className="tw-flex tw-tems-center tw-justify-center tw-text-xl tw-border-b tw-border-black tw-h-[calc(100vh-3.5rem)]">
        <Carousel />
      </section>
      <section className="tw-flex tw-items-center tw-justify-center tw-text-xl tw-border-b tw-border-black tw-h-screen">
        Category
      </section>
      <Footer />
    </>
  );
}

export default HomePage;
