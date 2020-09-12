import React from "react";
import Carousel from "react-bootstrap/Carousel";
import Button from "react-bootstrap/Button";
import { Container, Row, Col } from "react-bootstrap";
import GraphImg from "graphcms-image";


const Hero = (props) => {

  const imageURL = props.image;
  const mobileImageURL = props.imageSmall
  const title = props.title;
  const subtitle = props.subtitle;
  const buttonText = props.buttonText;
  return (
    <Carousel controls={false} indicators={false}>
      <Carousel.Item>
        <picture className="d-block w-100">
          <source media="(min-width:768px)" srcSet={imageURL} />
          <source
            media="(max-width:767px)"
            srcSet={mobileImageURL}
          />
          <img
            src={imageURL}
            alt="hero"
            className="d-block w-100"
          />
        </picture>
        <Carousel.Caption className="h-100">
          <Container className="h-100 text-center">
            <Row className="h-100 text-center">
            <Col xs={12} className="h-100 d-flex text-center">
            <div className="my-auto mx-auto">
              <p role="doc-subtitle" className="h3 text-center w-100">
                {subtitle}
              </p>
              <h2 className="text-center display-1">{title}</h2>
              <Button href="mailto:test@email.com" className='mt-3' size={'lg'}>
                  {buttonText}
              </Button>
            </div>
            </Col>
            </Row>
          </Container>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
};

export default Hero;
