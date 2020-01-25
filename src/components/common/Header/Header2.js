import React from "react";
import Menu from "./Menu/Menu";
import { NavDropdown, Navbar, Nav } from "react-bootstrap";
import "./Header.scss";

const Header = ({ toggleMenu }) => {
  return (
    <div className="Header">
      <nav class="navbar navbar-expand-lg navbar-light bg-light">
        <div class="container-fluid">
          <button
            type="button"
            id="sidebarCollapse"
            class="btn text-sidebar bg-turbo-yellow"
            onClick={toggleMenu}
          >
            <i class="fas fa-align-left"></i>
            <span></span>
          </button>
          <button
            class="btn btn-dark d-inline-block d-lg-none ml-auto"
            type="button"
            data-toggle="collapse"
            data-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <i class="fas fa-align-justify"></i>
          </button>

          <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="nav navbar-nav ml-auto">
              <li class="nav-item active">
                <Nav.Link href="/">HOME</Nav.Link>
              </li>
              <li class="nav-item">
                <Nav.Link href="/about">ABOUT</Nav.Link>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#">
                  Page
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#">
                  Page
                </a>
              </li>
            </ul>
            <Menu />
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Header;
