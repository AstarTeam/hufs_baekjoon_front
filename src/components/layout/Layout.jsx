import React from "react";
import { Outlet } from "react-router-dom";
import Footer from "../common/footer/Footer";

function Layout() {
  return (
    <>
      <header>헤더</header>
      <main>
        <Outlet />
      </main>
      <Footer />
    </>
  );
}

export default Layout;
