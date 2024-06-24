import { useTheme } from "next-themes";
import React from "react";
import { Button, Container, Nav, Navbar } from "react-bootstrap";
import DarkModeButton from "@/dynamics/DarkModeButton";

const Header: React.FC = () => {
  const { theme } = useTheme();

  return (
    <Navbar
      bg={theme}
      data-bs-theme={theme}
      className="border border-dark rounded justify-content-md-center"
      expand="lg"
    >
      <Container>
        <Navbar.Brand className="text-text" href="#">
          <h2 className="fw-300">
            <span className="text-primary">{`<A`}</span>ndres
            <span className="text-primary">{`/>`}</span>
          </h2>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbar-nav" />
        <Navbar.Collapse id="navbar-nav" className="justify-content-center">
          <Nav
            className="d-flex align-items-center my-2 my-lg-0"
            style={{ maxHeight: "100px" }}
            navbarScroll
          >
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#features">About me</Nav.Link>
            <Nav.Link href="#pricing">Skills</Nav.Link>
            <Nav.Link href="#pricing">Work</Nav.Link>
            <Nav.Link href="#pricing">Experience</Nav.Link>
            <DarkModeButton />
          </Nav>
        </Navbar.Collapse>
        <Navbar.Collapse className="justify-content-end">
          <Button variant="primary" className="fw-bolder text-white">
            Contact me
          </Button>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;
