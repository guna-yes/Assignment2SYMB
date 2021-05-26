import React, { useState } from "react";
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  NavbarText,
} from "reactstrap";
import Baground from "./Baground";

const Header = (props) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <div>
      <Navbar
        style={{ color: "white" }}
        color="dark"
        expand="md"
        className="sticky-top shadow"
      >
        <NavbarBrand href="/">
          <img src="./tech.png" alt="Tech" height="30" width="40"></img>
        </NavbarBrand>
        SYMB TECHNOLOGIES
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="ml-auto" navbar>
            <NavItem>
              <NavLink style={{ color: "inherit" }} href="/">
                Home
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink style={{ color: "inherit" }} href="/speakers">
                About
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink style={{ color: "inherit" }} href="/contact">
                Services
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink style={{ color: "inherit" }} href="/keytopics">
                Contact
              </NavLink>
            </NavItem>
          </Nav>
        </Collapse>
      </Navbar>
    </div>
  );
};

export default Header;
