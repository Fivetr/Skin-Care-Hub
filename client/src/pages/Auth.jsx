import React, { useState } from "react";
import Header from "../components/Header/Header";
import Login from "../components/Auth/sign";
import Register from "../components/Auth/register";

function Auth() {
  const [AuthMenu, setAuthMenu] = useState(true);
  return (
    <>
      <Header pageBG="bg-sky-100" />
      <section className="bg-gradient-to-b from-sky-100 via-blue-200 to-cyan-200 h-[calc(100vh-2.5rem)]">
        {AuthMenu ? (
          <Login setAuthMenu={setAuthMenu} />
        ) : (
          <Register setAuthMenu={setAuthMenu} />
        )}
      </section>
    </>
  );
}

export default Auth;
