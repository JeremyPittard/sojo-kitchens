import React from "react";
import Image from "react-bootstrap/Image";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

const About = () => {
  return (
    <>
      <Container>
        <Row>
          <Col xs={12} md={4}>
            <Image src="https://via.placeholder.com/379x500/0000FF/" />
          </Col>
          <Col xs={12} md={{ span: 7, offset: 1 }}>
            <p>gnfdsjoignfd</p>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default About;
