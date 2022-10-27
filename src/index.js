import React from "react";
import ReactDOM from "react-dom/client";
import "./styles/global.scss";
import Layout from "./layouts/Layout";
import Home from "./pages/home/Home";
import Finder from "./pages/finder/Finder";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/js/bootstrap.min.js";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Layout pageTitle={"Dashboard"}>
      <Home />
      <Finder />
    </Layout>
  </React.StrictMode>
);
