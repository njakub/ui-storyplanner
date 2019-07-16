import React from "react";
import { BrowserRouter, NavLink } from "react-router-dom";
import "./Header.scss";

const Header = () => {
  return (
    <div className="Header">
      <nav>
        <NavLink to="/" exact>
          Home
        </NavLink>
        {" | "}
        <NavLink to="/courses">Courses</NavLink>
        {" | "}
        <NavLink to="/about">About</NavLink>
      </nav>
    </div>
  );
};

export default Header;
