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
  let alignImage = (i +1)  % 2 === 0 ? "flex-row-reverse" : "";

    return (
      <section className={`image-callout py-5 my-5`} key={service.id}>
        <Container>
          <Row className={`h-100 ${alignImage}`}>
            <Col sm={12} md={7} className="my-auto">
              <h3>{service.name}</h3>
              <p>{service.description}</p>
            </Col>
            <Col xs={12} md={5}>
              <Image src={service.image.url} />
            </Col>
          </Row>
        </Container>
      </section>
    );
  });
};

export default ImageCallout;
