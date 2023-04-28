import React from "react";
import { Outlet } from "react-router-dom";
import Footer from "../common/footer/Footer";
import Header from "../common/header/Header";

function Layout() {
  return (
    <>
      <Header />
      <main>
        <Outlet />
      </main>
      <Footer />
    </>
  );
}

export default Layout;
