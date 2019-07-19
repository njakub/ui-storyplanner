import React from "react";
import { NavLink } from "react-router-dom";
import "./Footer.scss";

const Footer = props => (
  <div className="Footer">
    <div>
      <NavLink className="nav-link" to="/" exact>
        HOME
      </NavLink>
      <NavLink className="nav-link" to="/courses">
        COURSES
      </NavLink>
      <NavLink className="nav-link" to="/about">
        ABOUT
      </NavLink>
    </div>
  </div>
);

export default Footer;
