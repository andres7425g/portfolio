import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import IntroductionText from "@/atoms/IntroductionText";
import IntroductionRobot from "@/molecules/IntroductionRobot";

const IntroductionSections: React.FC = () => {
  return (
    <section>
      <Container fluid className="bg-lied">
        <Row className="align-items-center">
          <Col sm={12} md={6}>
            <IntroductionText />
          </Col>
          <Col sm={12} md={6}>
            <IntroductionRobot />
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default IntroductionSections;
