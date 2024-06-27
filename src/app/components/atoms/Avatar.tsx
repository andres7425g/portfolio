import React from "react";
import avatar from "@/public/avatar.png";
import { Col, Row } from "react-bootstrap";
import Image from "next/image";

const Avatar: React.FC = () => {
  return (
    <Row className="rounded-circle backdropFilter avatar-size">
      <Col className="d-flex justify-content-center align-items-flex-end">
        <Image width={100} src={avatar.src} alt="Avatar" />
      </Col>
    </Row>
  );
};

export default Avatar;
