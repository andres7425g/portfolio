import React, { useState } from "react";

interface LongTextProps {
  text: string;
}

const LongText: React.FC<LongTextProps> = ({ text }) => {
  const [showFullText, setShowFullText] = useState(false);
  const minCharacters = 105;

  const toggleFullText = () => {
    setShowFullText(!showFullText);
  };

  return (
    <div>
      {showFullText ? text : `${text.substring(0, minCharacters)}`}{" "}
      {text.length >= minCharacters && (
        <span className="text-primary" onClick={toggleFullText}>
          {showFullText ? "Read Less" : "...Read More"}
        </span>
      )}
    </div>
  );
};

export default LongText;
