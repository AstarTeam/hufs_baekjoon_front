import React from "react";
import { Outlet } from "react-router-dom";
import Footer from "../common/footer/Footer";
import Header from "../common/header/Header";
import styles from "./layout.module.css";

function Layout() {
  return (
    <div className={styles.wrapper}>
      <Header />
      <Outlet />
      <Footer />
    </div>
  );
}

export default Layout;
