import React from "react";

const BackDropSVG: React.FC = () => {
  return (
    <svg
      className="filter backdrop-blur-lg w-100"
      viewBox="0 0 258 69"
      width="100%"
      height="auto"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g filter="url(#filter0_b_112_2365)">
        <rect
          x="1"
          y="1.39648"
          className="w-100"
          height="66.1654"
          rx="12"
          fill="url(#paint0_radial_112_2365)"
          fillOpacity="0.2"
        ></rect>
        <rect
          x="1"
          y="1.39648"
          className="w-100"
          height="66.1654"
          rx="12"
          stroke="url(#paint1_linear_112_2365)"
          strokeWidth="2"
        ></rect>
      </g>
      <defs>
        <filter
          id="filter0_b_112_2365"
          x="-24"
          y="-23.6035"
          className="w-fit"
          height="116.165"
          filterUnits="userSpaceOnUse"
          colorInterpolationFilters="sRGB"
        >
          <feFlood floodOpacity="0" result="BackgroundImageFix"></feFlood>
          <feGaussianBlur
            in="BackgroundImageFix"
            stdDeviation="12"
          ></feGaussianBlur>
          <feComposite
            in2="SourceAlpha"
            operator="in"
            result="effect1_backgroundBlur_112_2365"
          ></feComposite>
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="effect1_backgroundBlur_112_2365"
            result="shape"
          ></feBlend>
        </filter>
        <radialGradient
          id="paint0_radial_112_2365"
          cx="0"
          cy="0"
          r="1"
          gradientUnits="userSpaceOnUse"
          gradientTransform="translate(1 1.39648) rotate(14.4915) scale(264.412 128.121)"
        >
          <stop stopColor="#00C16A"></stop>
          <stop offset="1" stopColor="#4CCC81" stopOpacity="0"></stop>
        </radialGradient>
        <linearGradient
          id="paint1_linear_112_2365"
          y1="1.39648"
          x2="129"
          y2="67.5619"
          gradientUnits="userSpaceOnUse"
          x1="128.27537085104268"
        >
          <stop stopColor="#00C16A"></stop>
          <stop offset="1" stopColor="#4CCC81" stopOpacity="0"></stop>
        </linearGradient>
      </defs>
    </svg>
  );
};

export default BackDropSVG;
