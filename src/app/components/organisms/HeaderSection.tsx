import React from "react";
import Header from "@/molecules/Header";
import { Row } from "react-bootstrap";
import IntroductionSections from "@/organisms/IntroductionSections";

const HeaderSection: React.FC = () => {
  return (
    <div className="stars">
      <Row className="bg-lined p-5" lg="8">
        <Header />
        <IntroductionSections />
      </Row>
    </div>
  );
};

export default HeaderSection;
