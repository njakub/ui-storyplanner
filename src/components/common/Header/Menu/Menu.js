import React from "react";
import { NavLink } from "react-router-dom";
import { NavDropdown, Navbar, Nav } from "react-bootstrap";
import "./Menu.scss";

const Menu = () => {
  return (
    // <div>
    //   <nav className="Menu navbar navbar-expand-lg">
    //     <a className="navbar-brand" href="#">
    //       TradeHub
    //     </a>
    //     <button
    //       className="navbar-toggler"
    //       type="button"
    //       data-toggle="collapse"
    //       data-target="#navbarNav"
    //       aria-controls="navbarNav"
    //       aria-expanded="false"
    //       aria-label="Toggle navigation"
    //     >
    //       <span className="navbar-toggler-icon" />
    //     </button>
    //     <div className="collapse navbar-collapse" id="navbarNav">
    //       <ul className="navbar-nav">
    //         <li className="nav-item">
    //           <NavLink className="nav-link" to="/" exact>
    //             HOME
    //           </NavLink>
    //         </li>
    //         <li className="nav-item">
    //           <NavLink className="nav-link" to="/characters/view">
    //             CHARACTERS
    //           </NavLink>
    //         </li>
    //         <li className="nav-item">
    //           <NavLink className="nav-link" to="/about">
    //             ABOUT
    //           </NavLink>
    //         </li>
    //         <li className="nav-item">
    //           <NavLink className="nav-link" to="/invoice">
    //             INVOICE
    //           </NavLink>
    //         </li>
    //         <NavDropdown title="Dropdown" id="collasible-nav-dropdown">
    //           <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
    //           <NavDropdown.Item href="#action/3.2">
    //             Another action
    //           </NavDropdown.Item>
    //           <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
    //           <NavDropdown.Divider />
    //           <NavDropdown.Item href="#action/3.4">
    //             Separated link
    //           </NavDropdown.Item>
    //         </NavDropdown>
    //       </ul>
    //     </div>
    //   </nav>
    <Navbar collapseOnSelect expand="lg" className="Navbar Menu">
      <Navbar.Brand href="#home">Story Planner</Navbar.Brand>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="mr-auto">
          <Nav.Link href="/">HOME</Nav.Link>
          <Nav.Link href="/invoice">INVOICE</Nav.Link>
          <Nav.Link href="/about">ABOUT</Nav.Link>
          <NavDropdown title="CHARACTERS" id="collasible-nav-dropdown">
            <NavDropdown.Item href="/characters/view">View</NavDropdown.Item>
            <NavDropdown.Item href="/characters/add">Add</NavDropdown.Item>
          </NavDropdown>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default Menu;
