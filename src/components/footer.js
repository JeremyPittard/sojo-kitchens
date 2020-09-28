import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

const Footer = () => {
  const theYear = new Date().getFullYear();
  const myLink = 'https://itty.bitty.site/#jpittard.net/data:text/html;charset=utf-8;bxze64,XQAAAAIgBQAAAAAAAAAeHMqHyTY4PyKmqfkwr6ooCXSIMxPQ7okSjV8DQaR8xaSw1o+sT+rS2wDlFoN6XjK8xIRZCetNTy5rSK/iz5hhe4S7315DWlUpsetwN8HbmCj0OyQmwRdre0uffKthA0ERre6lsXhZckFB6ZAngORV3964eI33encFcqUzHliyM68AT6U5OXpoMZU06wR/HImzLcRPnQNlV1yTPxZP/No+6/2bhuicY5kWUriHlIvhrdQU1cwFuBeRrijvfrhIs11ZOp7V1CFabzLXaGubWHgUnGSYzHQqVKAiHU9dyhQAuJLwvHP4Pg9QlCxcIHJeX398XmoeRHjpwpiNyULdGStUYeHKRHXs/qxuV0qNsErzIxnAmOOTuDavV6AQAPwaekljD5XsDNJTecvowLot2E4z1ogiAnKIZ+4106Umsawl+F4lex4P96/EeirYubFz3bUiMaT7oDykCol9/2U10SXHWvMiwdVLkTmuavLxQSTaZKxaf4IHZ2HDNlEEWEdH0fx7e1HoE1XIpS3DKx3VLrat7uml/mxvRu4wUzPV6mOVx1zYncSHzj2YJpiGtPC6b4+ckaZvK9ulLRDCyuEyYw7wce1XtWeh88703rEUzuqwqTkQvSu7SNiNfEfohGCnRcf2eN+bPHPrmbzXxB7NGogkxvwveBHEbqUDxNMj2X5SSMbQNy7Uuq/RGANNSMG8iaha5qUfCStqu4IRjWsG5ro1qV0DUVbDLRD7K7JRJc5ym7mejoPhmkVdJHEezm8IG0JHleLN6wQ6IQOKc1HG87p7EpQybPW+ahR1nNNl9Rb/zQyjxzVQOqL/+JGoKg=='
  return (
    <div className="footer">
      <Container className="py-5">
        <Row className="d-flex justify-content-md-between">
          <Col sm={12} md={4}>
            <h4>Sojo Kitchens</h4>
            <p>&copy; {theYear}</p>
          </Col>
          <Col sm={12} md={4} className="text-right">
            <p>
              made by{" "}
              <a href={myLink} target="_blank">
                this guy.
              </a>{" "}
            </p>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Footer;
