import React, { useState } from "react";
import {
  Navbar,
  NavbarBrand,
  Collapse,
  NavbarToggler,
  Nav,
  NavItem,
  NavLink,
} from "reactstrap";
import { Link } from "react-router-dom";

export const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);
  return (
    <Navbar color="dark" dark expand="md" className="mb-xs-2 mb-md-4 px-3">
      <NavbarBrand className="text-white" color="light" tag="div">
        <Link
          onClick={isOpen ? toggle : undefined}
          className="text-white navbar-brand"
          to="/"
        >
          REACT GAMES
        </Link>
      </NavbarBrand>
      <NavbarToggler onClick={toggle} />
      <Collapse isOpen={isOpen} navbar>
        <Nav className="ml-auto" navbar>
          <NavItem>
            <NavLink tag="span">
              <Link
                onClick={isOpen ? toggle : undefined}
                className="nav-link"
                to="/puzzle-15"
              >
                15 Puzzle
              </Link>
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink tag="span">
              <Link
                onClick={isOpen ? toggle : undefined}
                className="nav-link"
                to="/match-the-picture"
              >
                Match the picture
              </Link>
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink tag="span">
              <Link
                onClick={isOpen ? toggle : undefined}
                className="nav-link"
                to="/snake"
              >
                Snake
              </Link>
            </NavLink>
          </NavItem>
        </Nav>
      </Collapse>
    </Navbar>
  );
};
