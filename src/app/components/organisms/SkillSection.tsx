import React from "react";
import { Badge, Container, Row } from "react-bootstrap";
import SkillsSlide from "@/molecules/SkillsSlide";

const SkillSection: React.FC = () => {
  return (
    <section>
      <Container fluid>
        <Row className="d-flex justify-content-center">
          <Badge className="fs-5 my-2 w-auto" bg="dark">
            Skills
          </Badge>
          <p className="fs-4 text-primary text-center">
            The skills, tools, and technologies I am really good at:
          </p>
        </Row>
        <SkillsSlide />
      </Container>
      <hr />
    </section>
  );
};

export default SkillSection;
