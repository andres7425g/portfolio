import React from "react";
import { Badge, Container, Row } from "react-bootstrap";
import ProjectsList from "@/molecules/ProjectsList";

const ProjectSection: React.FC = () => {
  return (
    <section>
      <Container className="w-100 h-100 bg-abstract" fluid>
        <div className="backdrop-abstract">
          <Row className="d-flex justify-content-center">
            <Badge className="fs-5 my-2 w-auto" bg="dark">
              My Projects
            </Badge>
            <p className="fs-4 text-primary text-center">
              Here is a quick summary of my most recent experiences
            </p>
          </Row>
          <ProjectsList />
        </div>
      </Container>
    </section>
  );
};

export default ProjectSection;
