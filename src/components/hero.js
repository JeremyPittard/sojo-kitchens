import React, {useEffect} from "react";
import Carousel from "react-bootstrap/Carousel";
import Button from "react-bootstrap/Button";
import { Container, Row, Col } from "react-bootstrap";

import { TimelineMax } from "gsap";



const Hero = (props) => {

  useEffect(() => {
    const tl = new TimelineMax();
    tl.set("#title", {opacity: 0})
    tl.set("#subtitle", {opacity: 0, y:-5})
    tl.set("#hero-cta", {opacity: 0, y:-5})

    tl.to("#title", { opacity: 1, duration:0.5 })
    .to("#subtitle", { y: 0, opacity: 1,duration:0.5 })
    .to("#hero-cta", { y: 0, opacity: 1, duration:0.5 });
  }, [])


  const imageURL = props.image;
  const mobileImageURL = props.imageSmall
  const title = props.title;
  const subtitle = props.subtitle;
  const buttonText = props.buttonText;
  return (
    <Carousel controls={false} indicators={false}>
      <Carousel.Item>
        <picture className="d-block w-100">
          <source media="(min-width:768px)" srcSet={`https://ik.imagekit.io/jeixqp7rmu/sojo/${imageURL}/tr:n-hero_d	`} />
          <source
            media="(max-width:767px)"
            srcSet={`https://ik.imagekit.io/jeixqp7rmu/sojo/${mobileImageURL}/tr:n-mobile_hero`}
          />
          <img
            src={`https://ik.imagekit.io/jeixqp7rmu/sojo/${imageURL}/tr:n-hero_d	`}
            alt="hero"
            className="d-block w-100"
          />
        </picture>
        <Carousel.Caption className="h-100">
          <Container className="h-100 text-center">
            <Row className="h-100 text-center">
            <Col xs={12} className="h-100 d-flex text-center">
            <div className="my-auto mx-auto">
              <p role="doc-subtitle" id="subtitle" className="h3 text-center w-100">
                {subtitle}
              </p>
              <h2 className="text-center display-1" id='title' >{title}</h2>
              <Button href="mailto:test@email.com" className='mt-3' id='hero-cta' size={'lg'}>
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
