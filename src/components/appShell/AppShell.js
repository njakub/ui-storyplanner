import React, { useState } from "react";
import Footer from "../common/footer/footer";
import SideBar from "../common/sideBar/sideBar";
import "./appShell.scss";

function AppShell(props) {
  return (
    <div className="d-flex" id="content">
      <SideBar />
      <div id="page-content-wrapper">
        <div id="content-container">{props.children}</div>
        <Footer />
      </div>
    </div>
  );
}

export default AppShell;
