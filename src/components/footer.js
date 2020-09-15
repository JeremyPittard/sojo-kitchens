import React from "react";
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
            <h4>Sojo Kitchens</h4>
            <p>&copy; {theYear}</p>
          </Col>
          <Col sm={12} md={4} className="text-right">
            <p>
              made by{" "}
              <a href="www.jpittard.net" target="_blank">
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
