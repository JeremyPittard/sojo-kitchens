import React from 'react';
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

const Footer = () => {
  const theYear = new Date().getFullYear();
  return (
    <div className="footer">
      <Container className="py-5">
        <Row className="d-flex justify-content-md-between">
          <Col sm={12} md={4}>
            Sojo Kitchens
          </Col>
          <Col sm={12} md={4}>
            <ul>
              <li>insta</li>
              <li>fb</li>
              <li>linkedin</li>
              <li>contact</li>
            </ul>
          </Col>
        </Row>
        <Row className="d-flex justify-content-md-between">
          <Col xs={12} md={2}>
            <p>&copy; {theYear}</p>
          </Col>
          <Col xs={12} md={2}>
            <p>
              made by{" "}
              <a href="jpittard.net" target="blank">
                this guy.
              </a>{" "}
            </p>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Footer;
