import React from "react";
import { Badge } from "react-bootstrap";
import Card from "react-bootstrap/Card";
import { useTheme } from "next-themes";
import LongText from "@/atoms/LongText";
import Project from "@/model/project.model";

const CardProject: React.FC<{ project: Project }> = ({ project }) => {
  const { theme } = useTheme();
  const { title, imageUrl, description, skills } = project;
  const textColor = theme === "dark" ? "light" : "dark";

  return (
    <Card
      className="border-dark"
      style={{ width: "18rem", backgroundColor: "transparent" }}
    >
      <div
        className={`bg-${theme} d-flex align-items-center img-container rounded`}
      >
        <Card.Img variant="top" src={imageUrl} />
      </div>
      <Card.Body>
        <Card.Title className="text-primary text-center">{title}</Card.Title>
        <Card.Text className={`text-${textColor} text-justify`}>
          <LongText text={description} />
        </Card.Text>
      </Card.Body>
      <Card.Footer className="d-flex flex-wrap justify-content-space-between">
        {skills.map((skill, index) => (
          <Badge
            className="text-secondary text-justify m-1"
            key={index}
            bg={theme}
          >
            {skill}
          </Badge>
        ))}
      </Card.Footer>
    </Card>
  );
};

export default CardProject;
