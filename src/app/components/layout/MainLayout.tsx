import React from "react";
import { Container } from "react-bootstrap";
import "swiper/css";

interface MainLayoutProps {
  children: React.ReactNode;
}

const MainLayout: React.FC<MainLayoutProps> = ({ children }) => {

  return (
    <Container className="p-relative border border-dark rounded xs-12">
      <Container className="layer p-0">{children}</Container>
    </Container>
  );
};

export default MainLayout;
