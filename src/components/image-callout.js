import React from "react";
import Image from "react-bootstrap/Image";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

/**
 * props:
 * alignImage: (str) left/right, defaults to right,
 * heading: (str) the heading text
 * text: (str) the paragraph text
 */

const ImageCallout = (props) => {
  return props.callOuts.map((service, i) => {
    let alignImage = (i + 1) % 2 === 0 ? "left" : "right";

    if (alignImage === "left") {
      return (
        <section className={`image-callout py-5 my-5`} key={service.id}>
          <Container>
            <Row className={`h-100`}>
              <Col sm={12} md={6} className="my-auto">
                <h3>{service.name}</h3>
                <p>{service.description}</p>
              </Col>
              <Col xs={12} md={{ span: 5, offset: 1 }}>
                <Image src={service.image.url} />
              </Col>
            </Row>
          </Container>
        </section>
      );
    } else {
      return (
        <section className={`image-callout py-5 my-5`} key={service.id}>
          <Container>
            <Row className={`h-100`}>
              <Col sm={12} md={5} className="my-auto">
                <Image src={service.image.url} />
              </Col>
              <Col xs={12} md={{ span: 6, offset: 1 }}>
                <h3>{service.name}</h3>
                <p>{service.description}</p>
              </Col>
            </Row>
          </Container>
        </section>
      );
    }
  });
};

export default ImageCallout;
