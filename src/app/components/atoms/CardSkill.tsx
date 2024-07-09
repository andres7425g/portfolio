import React from "react";
import { Card } from "react-bootstrap";

import "swiper/css";
import "swiper/css/pagination";

interface SkillsCardProps {
  title: string;
  logo: string;
  description: string;
}

const SkillsCard: React.FC<SkillsCardProps> = ({ title, logo, description }) => {
  return (
    <Card className="h-100">
      <Card.Img className="p-5" alt={title} src={logo} />
      <Card.Body>
        <Card.Title className="text-primary text-center">
          {title}
        </Card.Title>
        <Card.Text className="text-secondary text-justify">
          {description}
        </Card.Text>
      </Card.Body>
    </Card>
  );
};

export default SkillsCard;
