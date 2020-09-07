import React from "react";
import Jumbotron from "react-bootstrap/Jumbotron";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
const Hero = () => {
  return (
    <Jumbotron> 
      <Container>
        <Row>
          <Col className="text-center">
            <h1 className="sr-only">Sojo Kitchen's, Perth Western Australia</h1>
            <h2 className="text-center h1">
              Sojo Kitchens
            </h2>
            <p role="doc-subtitle" className='h3 text-center'>The Kitchen of tomorrow, Today!</p>
            <Button href='mailto:test@email.com'>Tell 'em what to do next</Button>
            👇
          </Col>
        </Row>
      </Container>
    </Jumbotron>
  );
};

export default Hero;
