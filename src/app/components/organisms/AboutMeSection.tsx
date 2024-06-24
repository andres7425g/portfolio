import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import AvatarContainer from "@/molecules/AvatarContainer";
import AboutMeContainer from "@/molecules/AboutMeContainer";

const AboutMeSection: React.FC = () => {
  return (
    <section>
      <Container fluid>
        <Row className="align-items-center">
          <Col sm={12} md={4}>
            <AvatarContainer />
          </Col>
          <Col sm={12} md={8}>
            <AboutMeContainer />
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default AboutMeSection;
