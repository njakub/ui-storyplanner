import React from "react";
import Header from "../common/Header/Header";
import Footer from "../common/Footer/Footer";
import { Link } from "react-router-dom";

const AppShell = props => (
  <>
    <Header />
    {props.children}
    <Footer />
  </>
);

export default AppShell;
