import React from "react";
import { BrowserRouter, NavLink } from "react-router-dom";
import { withRouter } from "react-router";

const Header = () => {
  return (
    <nav>
      <NavLink to="/" exact>
        Home
      </NavLink>
      {" | "}
      <NavLink to="/courses">Courses</NavLink>
      {" | "}
      <NavLink to="/about">About</NavLink>
    </nav>
  );
};

export default Header;
