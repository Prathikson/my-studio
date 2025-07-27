import React from "react";

const SvgLogo: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 375 375"
    fill="none"
    {...props} // <== this spreads all props like className, width, height, etc.
  >
    <defs>
      <clipPath id="f373c237b5">
        <path d="M10.438 76.457h131.957V299H10.438Z" />
      </clipPath>
      <clipPath id="2bcfd7fe47">
        <path d="M232.523 76H364.48v222.508H232.523Z" />
      </clipPath>
      <clipPath id="569ff14378">
        <path d="M76.434 232.547H299v131.957H76.434Z" />
      </clipPath>
      <clipPath id="65d00aa32a">
        <path d="M76 10.46h222.484v131.958H76Z" />
      </clipPath>
    </defs>
    <g id="0176e50ea6">
      <g clipPath="url(#f373c237b5)">
        <path
          fill="#de0f3f"
          d="m10.438 298.148 64.007-110.664L10.438 76.816h67.949l64.008 110.668-64.008 110.664Z"
        />
      </g>
      <g clipPath="url(#2bcfd7fe47)">
        <path
          fill="#de0f3f"
          d="m364.48 76.816-64.007 110.668 64.007 110.664h-67.949l-64.008-110.664 64.008-110.668Z"
        />
      </g>
      <g clipPath="url(#569ff14378)">
        <path
          fill="#de0f3f"
          d="m298.125 364.504-110.668-64.008-110.664 64.008v-67.95l110.664-64.007 110.668 64.008Z"
        />
      </g>
      <g clipPath="url(#65d00aa32a)">
        <path
          fill="#de0f3f"
          d="M76.793 10.46 187.457 74.47 298.125 10.46v67.95l-110.668 64.007L76.793 78.41Z"
        />
      </g>
    </g>
  </svg>
);

export default SvgLogo;
