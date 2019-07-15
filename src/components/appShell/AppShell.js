import React from "react";
import Header from "../common/Header/Header";
import Footer from "../common/Footer/Footer";
import "./AppShell.scss";

const AppShell = props => (
  <div className="appShell">
    <Header />
    <h1 className="redc">REDD</h1>
    {props.children}
    <Footer />
  </div>
);

export default AppShell;
