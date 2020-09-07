import React from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";

const NavBar = () => {
  return (
    <>
      <Navbar expand="md" fixed="top">
        <Container>
          <Navbar.Brand href="#">Sojo Kitchens</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav" className="justify-content-end">
            <Nav>
              <Nav.Item>
                <Button variant="Link" size="lg">
                  About
                </Button>
                <Button variant="Link" size="lg">
                  Services
                </Button>
                <Button variant="Link" size="lg">
                  Portfolio
                </Button>
              </Nav.Item>
              <Nav.Item>
                <Button href="mailto:test@email.com" variant="primary" size="lg">
                  Get in touch
                </Button>
              </Nav.Item>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
};

export default NavBar;
