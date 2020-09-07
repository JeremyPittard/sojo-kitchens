import React from 'react';
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
  let alignImage = props.alignImage === "left" ? "flex-row-reverse" : "";
  const heading = props.heading;
  const text = props.text;
  return (
    <Container className={`image-callout`}>
      <Row className={`h-100 ${alignImage}`}>
        <Col sm={12} md={8} className="my-auto">
          <h3>{heading}</h3>
          <p>{text}</p>
        </Col>
        <Col xs={12} md={4}>
          <Image src="https://via.placeholder.com/350/0000FF/ffffff?Text=350x350" />
        </Col>
      </Row>
    </Container>
  );
};

export default ImageCallout;
