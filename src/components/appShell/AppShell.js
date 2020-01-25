import React, { useState } from "react";
import Header from "../common/Header/Header";
import Footer from "../common/Footer/Footer";
import SideBar from "../common/sideBar/SideBar";
import "./AppShell.scss";

import Header2 from "../common/Header/Header2";

function AppShell(props) {
  return (
    <div className="d-flex" id="content">
      <SideBar />
      <div id="page-content-wrapper">
        {/* <Header /> */}
        <div id="content-container">{props.children}</div>
        <Footer />
      </div>
    </div>
  );
}

export default AppShell;
