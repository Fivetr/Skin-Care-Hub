import React from "react";
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";

function HomePage() {
  return (
    <>
      <Header />
      <section className="flex items-center justify-center text-xl border-b border-black h-[calc(100vh-2.5rem)]">
        Description
      </section>
      <section className="flex items-center justify-center text-xl border-b border-black h-screen">
        Category
      </section>
      <Footer />
    </>
  );
}

export default HomePage;
