import React, {useEffect} from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { ReactComponent as SOJO } from "../svg/sojo.svg";

import { gsap, TimelineMax } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";


gsap.registerPlugin(ScrollTrigger);

const About = (props) => {

  useEffect(() => {
    const tl = new TimelineMax();

    tl.set('.about-content', { opacity:0, y: 250})
    tl.to(".about-content", { scrollTrigger: { trigger: ".breakout", start: "top center", duration: 3.35}, opacity: 1, y:0 });
  }, [])


  return (
    <>
      <section className="about d-flex align-items-center">
        <Container id="about" className="py-5">
          <Row className="align-items-center">
            <Col xs={12} md={4} className="mb-5 mb-md-0 breakout">
              <SOJO />
            </Col>
            <Col
              xs={12}
              md={{ span: 7, offset: 1 }}
              dangerouslySetInnerHTML={{ __html: props.content }}
              className="about-content"
            ></Col>
          </Row>
        </Container>
      </section>
    </>
  );
};

export default About;
