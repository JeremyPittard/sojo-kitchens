import React from "react";
import { Map, TileLayer, Marker } from "react-leaflet";
import L from "leaflet";
import "leaflet/dist/leaflet.css";
import {
  RiFacebookFill,
  RiInstagramFill,
  RiLinkedinBoxFill,
  RiPhoneFill,
  RiMailSendFill,
} from "react-icons/ri";
import { IconContext } from "react-icons";

import { Container, Row, Col } from "react-bootstrap";

const SojoMap = (props) => {
  const pointerIcon = new L.Icon({
    iconUrl: "/static/img/marker.png",
    iconRetinaUrl: "/static/img/marker.png",
    iconSize: [48, 48],
  });

  const iconColor = "#e3f6f5";

  const details = props.details;

  const position = [details.location.latitude, details.location.longitude];
  return (
    <Container className="py-3 sojo-map">
      <Row className="h-100">
        <Col className="my-auto" xs={12} md={4}>
          <div className="my-auto text-left ">
            <h3 className='mb-4' >Find Us On</h3>
            <IconContext.Provider value={{ color: iconColor, size: "2.5em" }}>
              {details.fbUrl != null && (
                <a href={details.fbUrl} target="_blank" className="mr-3">
                  <RiFacebookFill />
                </a>
              )}

              {details.instagramUrl != null && (
                <a href={details.instagramUrl} className='mr-3' target="_blank">
                  <RiInstagramFill />
                </a>
              )}

              {details.linkedInUrl != null && (
                <a href={details.linkedInUrl} className='mr-3' target="_blank">
                  <RiLinkedinBoxFill />
                </a>
              )}

              {details.phoneNumber != null && (
                <a href={`tel:${details.phoneNumber}`} className='mr-3' target="_top">
                  <RiPhoneFill />
                </a>
              )}

              {details.email != null && (
                <a href={`mailto:${details.email}`} className='mr-3' target="_top">
                  <RiMailSendFill />
                </a>
              )}
            </IconContext.Provider>
          </div>
        </Col>
        <Col xs={12} md={8} className="mt-5 mt-md-0">
          <Map center={position} zoom={15}>
            <TileLayer
              attribution='&amp;copy <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            <Marker position={position} icon={pointerIcon}></Marker>
          </Map>
        </Col>
      </Row>
    </Container>
  );
};

export default SojoMap;
