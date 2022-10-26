import React from "react";
import Footer from "../components/footer/Footer";
import Navbar from "../components/navigation/Navbar";

const Layout = ({ children }) => {
  return (
    <>
      <Navbar />
      <main>{children}</main>
      <Footer />
    </>
  );
};

export default Layout;
