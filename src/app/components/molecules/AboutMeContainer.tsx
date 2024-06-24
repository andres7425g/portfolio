import React from "react";
import { Badge, Container } from "react-bootstrap";

const AboutMeContainer: React.FC = () => {
  const currentDate = new Date();
  const profetionalDate = new Date("2018-08-01");

  const dif = currentDate.getTime() - profetionalDate.getTime();
  const difYears = dif / (1000 * 3600 * 24) / 365.25;
  return (
    <Container>
      <Badge className="fs-5 my-2" bg="dark">
        About me
      </Badge>
      <h3 className="fs-1 w-75 my-4 text-primary">
        Transforming visions into exceptional portfolios
      </h3>
      <p className="fs-5">
        Andres Manrique Garcia is a skilled Front-End Engineer with{" "}
        {Math.round(difYears)} years of experience in developing high-quality
        web applications using ReactJS, NextJS, Jest, Cypress, and NodeJS
        GraphQL. He has provided comprehensive front-end and back-end support,
        migrated email services, and developed a mobile news application. In his
        role as a Junior Developer, he contributed to major website migrations
        and redesigns. His earlier roles were focused on web application
        development using HTML5, CSS3, JavaScript, and Node.js. Andres holds a
        Systems Engineering degree from Universidad El Bosque.
      </p>
    </Container>
  );
};

export default AboutMeContainer;
