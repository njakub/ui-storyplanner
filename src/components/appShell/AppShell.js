import React from "react";
import Header from "../common/Header/Header";
import Footer from "../common/Footer/Footer";
import "./AppShell.scss";

const AppShell = props => (
  <div className="AppShell">
    <Header />
    <div className="content-wrap">{props.children}</div>
    <Footer />
  </div>
);

export default AppShell;
