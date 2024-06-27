import React from "react";
import { Col } from "react-bootstrap";

const IntroductionText: React.FC = () => {
  const currentDate = new Date();
  const profetionalDate = new Date("2018-08-01");

  const dif = currentDate.getTime() - profetionalDate.getTime();
  const difYears = dif / (1000 * 3600 * 24) / 365.25;

  return (
    <Col>
      <span className="fs-3">Hi, I&apos;m</span>
      <br />
      <h1 className="fw-500">Andres Manrique</h1>
      <p className="fs-5 text-secondary">
        A Passinate{" "}
        <span className="text-primary">{"<FrontEnd web Development /> "}</span>{" "}
        with {Math.round(difYears)} years of experience creating user friendly
        websites.
      </p>
    </Col>
  );
};

export default IntroductionText;
