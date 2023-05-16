import React from "react";
import { Button } from "react-bootstrap";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import { FaShoppingCart } from "react-icons/fa";
import "./Header.css";

const Header = () => {
  return (
    <div>
      <Navbar collapseOnSelect expand="lg">
        <Container>
          <Navbar.Brand href="#home">
            <h4 className="fooditem">FoodTime</h4>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="mx-auto">
              <Nav.Link href="#features" className="fooditem-link">
                Home
              </Nav.Link>
              <Nav.Link href="#pricing" className="fooditem-link">
                Blog
              </Nav.Link>
              <Nav.Link href="#pricing" className="fooditem-link">
                About Us
              </Nav.Link>
              <NavDropdown
                title="EN"
                id="collasible-nav-dropdown"
                className="fooditem-link"
              >
                <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">
                  Another action
                </NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">
                  Something
                </NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action/3.4">
                  Separated link
                </NavDropdown.Item>
              </NavDropdown>
            </Nav>
            <Nav>
              <Nav.Link href="#deets" className="login">
                <h4 className="login-text">Login</h4>
              </Nav.Link>
              <Nav.Link
                eventKey={2}
                href="#memes"
                className="cart rounded-circle ms-3"
              >
                <div className="position-absolute">
                  <FaShoppingCart
                    className="text-white"
                    style={{ marginTop: "10px" }}
                  />

                  <p class="badge bg-warning rounded-circle">2</p>
                </div>
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <hr className="heading"/>
    </div>
  );
};

export default Header;
