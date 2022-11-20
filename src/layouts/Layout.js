import "../layouts/layout.scss";
import React, { useEffect } from "react";
import Footer from "../components/footer/Footer";
import Navbar from "../components/navigation/Navbar";

const Layout = ({ children, pageTitle }) => {
  useEffect(() => {
    document.title = pageTitle;
  }, [pageTitle]);

  return (
    <>
      <Navbar />
      <main>{children}</main>
      <Footer />
    </>
  );
};

export default Layout;
