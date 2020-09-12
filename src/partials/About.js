import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { ReactComponent as SOJO } from "../svg/sojo.svg";

const About = (props) => {
  return (
    <>
      <section className="about d-flex align-items-center">
        <Container id="about" className="py-5">
          <Row className="align-items-center">
            <Col xs={12} md={4}>
              <SOJO />
            </Col>
            <Col
              xs={12}
              md={{ span: 7, offset: 1 }}
              dangerouslySetInnerHTML={{ __html: props.content }}
            ></Col>
          </Row>
        </Container>
      </section>
    </>
  );
};

export default About;
