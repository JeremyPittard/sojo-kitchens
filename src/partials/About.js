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
    setTimeout(() =>{
      tl.fromTo(".about-content", { y: 250, opacity: 0 }, {opacity: 1, y: 0, duration:0.35 , scrollTrigger: { trigger: ".breakout", start: "top center"}});
    }, 1000)

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
