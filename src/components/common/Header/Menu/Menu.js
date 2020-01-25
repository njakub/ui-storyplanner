import React from "react";
import { NavDropdown, Navbar, Nav } from "react-bootstrap";

const Menu = () => {
  return (
    <Navbar collapseOnSelect expand="lg" className="Navbar Menu">
      <Navbar.Brand href="#home">TaleMate</Navbar.Brand>
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
