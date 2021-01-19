import React, { useState } from "react";
import { Link } from "react-router-dom";
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
} from "reactstrap";
import CartSummary from "../cart/CartSummary";

const Navi = (props) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <Navbar color="light" light expand="md" className="p-3 mb-5">
      <NavbarBrand href="/">
        <div className="p-1 mb-2 bg-success text-light font-weight-bold rounded">
          HOME
        </div>{" "}
      </NavbarBrand>
      <NavbarToggler onClick={toggle} />
      <Collapse isOpen={isOpen} navbar>
        <Nav className="ml-auto" navbar>
          <NavItem className="pr-3">
            <Link to="/add">
              <div className="p-2 mb-1 bg-warning text-dark font-weight-bold rounded">
                Add Product
              </div>
            </Link>
          </NavItem>
          <CartSummary />
        </Nav>
      </Collapse>
    </Navbar>
  );
};

export default Navi;
