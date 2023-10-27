import React from "react";
import Header from "../components/Header/Header";
import Login from "../components/Auth/sign";

function Auth() {
  return (
    <>
      <Header />
      <section className="bg-gradient-to-b from-sky-100 via-blue-200 to-cyan-200 h-[calc(100vh-2.5rem)]">
        <Login />
      </section>
    </>
  );
}

export default Auth;
