import React from "react";
import { Badge, Container, Row } from "react-bootstrap";
import SkillsSlide from "@/molecules/SkillsSlide";

const ProjectSection
: React.FC = () => {
  return (
    <section>
      <Container className="w-100 h-100 bg-abstract" fluid>
      <Badge className="fs-5 my-2 w-auto" bg="dark">
            My Projects
          </Badge>
          <p className="fs-4 text-primary text-center">
            The skills, tools, and technologies I am really good at:
          </p>
      </Container>
    </section>
  );
};

export default ProjectSection
;
