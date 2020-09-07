import React from "react";
import { Map, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";

import { Container, Row, Col } from "react-bootstrap";

const SojoMap = () => {
  const position = [-31.932, 115.8413];
  return (
    <Container className='p-3'>
      <Row>
          <Col></Col>
        <Col>
          <Map center={position} zoom={14}>
            <TileLayer
              attribution='&amp;copy <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            <Marker position={position}>
              <Popup>
                A pretty CSS3 popup. <br /> Easily customizable.
              </Popup>
            </Marker>
          </Map>
        </Col>
      </Row>
    </Container>
  );
};

export default SojoMap;
