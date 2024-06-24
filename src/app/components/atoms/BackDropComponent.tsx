import React from "react";
import pcIcon from "@/public/pc-icon.svg";
import qualityIcon from "@/public/quality-icon.svg";
import BackDropSVG from "@/app/components/assets/BackDrop.svg";

interface BackDropComponentInterface {
  top: string;
  left?: string;
  right?: string;
  label: string;
}

const BackDropComponent: React.FC<BackDropComponentInterface> = ({
  top,
  left,
  right,
  label,
}) => {
  return (
    <div
      className="backdrop-container position-absolute"
      style={{ top, left, right }}
    >
      <div className="positon-relative">
        <BackDropSVG />
        <div
          className="position-absolute d-flex align-items-center"
          style={{
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
          }}
        >
          <img
            src={label === "Responsive" ? pcIcon.src : qualityIcon.src}
            alt="robot"
          />
          <span className={`${label === "Responsive" ? "fs-4" : "fs-6"}  ms-1`}>
            {label}
          </span>
        </div>
      </div>
    </div>
  );
};

export default BackDropComponent;
