import React from "react";
import Menu from "./Menu/Menu";
import "./Header.scss";

const Header = () => {
  return (
    <nav class="navbar navbar-expand-lg navbar-light bg-light border-bottom">
      <button class="btn btn-primary" id="menu-toggle">
        Toggle Menu
      </button>

      <button
        class="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>

      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav ml-auto mt-2 mt-lg-0">
          <li class="nav-item active">
            <a class="nav-link" href="#">
              Home <span class="sr-only">(current)</span>
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Header;
