import React from "react";
import { Button, Container } from "react-bootstrap";
import { useTheme } from "next-themes";

const DarkModeButton: React.FC = () => {
  const { theme = 'dark', setTheme } = useTheme();

  const toggleTheme = () => {
    const newTheme = theme === "dark" ? "light" : "dark";
    setTheme(newTheme);
  }  

  return (
    <Container className="w-auto">
      <Button
        className={`dark-button btn-light ${theme === "light" ? "light" : ""}`}
        onClick={toggleTheme}
      >
        <div className={`toggle ${theme === "light" ? "light" : ""}`} />
      </Button>
      <span className="ms-1">
        {theme === "dark" ? "Dark" : "Light"} Mode
      </span>
    </Container>
  );
};


export default DarkModeButton;