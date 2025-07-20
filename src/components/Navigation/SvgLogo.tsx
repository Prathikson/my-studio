import type { SVGProps } from "react";

const SvgLogo = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="500"
    height="500"
    version="1.2"
    viewBox="0 0 375 375"
    {...props}
  >
    <defs>
      <clipPath id="clipPath-1ff88ce133">
        <path d="M28.09 67.797h318.75v239.25H28.09Z" />
      </clipPath>
    </defs>
    <g clipPath="url(#clipPath-1ff88ce133)">
      <path
        fill="#1e1e1e"
        d="M346.629 285.676c0-6.957-2.984-14.906-8.7-23.11L216.915 85.636c-7.703-11.429-18.39-17.64-29.574-17.64-11.18 0-21.867 6.211-29.57 17.64L36.754 262.32c-5.715 8.2-8.45 16.399-8.45 23.356 0 13.172 10.684 21.37 28.329 21.37H318.3c17.64 0 28.328-8.198 28.328-21.37Z"
      />
    </g>
  </svg>
);

export default SvgLogo;
