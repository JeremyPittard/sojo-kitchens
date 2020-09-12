import React from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";

const NavBar = () => {
  return (
    <>
      <Navbar expand="md" fixed="top" className="py-md-3" variant="light" bg="light">
        <Container>
          <Navbar.Brand href="#">Sojo Kitchens</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav" className="justify-content-end">
            <Nav className="d-flex align-items-center">
              <Nav.Item>
                  <Nav.Link href="#about" className='my-auto'>
                    About
                  </Nav.Link>
              </Nav.Item>
              <Nav.Link href="#services">
                  Services
              </Nav.Link>
              <Nav.Link href="#portfoliio">
                  Portfolio
              </Nav.Link>
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
