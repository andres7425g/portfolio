import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import Avatar from "@/atoms/Avatar";
import SocialMedia from "../atoms/SocialMedia";

const AvatarContainer: React.FC = () => {
  return (
    <Container>
      <Avatar />
      <Row className="rounded backdrop-social name-size">
        <Col className="d-flex flex-column align-items-center">
          <h1 className="fs-6 pt-2">Andres Manrique</h1>
         <SocialMedia /> 
        </Col>
      </Row>
    </Container>
  );
};

export default AvatarContainer;
