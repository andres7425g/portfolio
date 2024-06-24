import React from "react";
import robot from "@/public/robot.png";
import { Col } from "react-bootstrap";
import BackDropComponent from "@/atoms/BackDropComponent";

const IntroductionRobot: React.FC = () => {
  return (
    <Col className="d-flex justify-content-end position-relative">
      <img width={"65%"} src={robot.src} alt="robot" />
     <BackDropComponent top="70%" right="-5%" label={"Good Quality"}/>
     <BackDropComponent top="50%" left="0" label={"Responsive"}/>
    </Col>
  );
};

export default IntroductionRobot;
