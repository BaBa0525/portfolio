import { type FC } from "react";
import { type IconProps } from "../types/IconProps";

export const ReactIcon: FC<IconProps> = ({ className }) => {
  return (
    <svg
      width="100%"
      height="100%"
      viewBox="-10.5 -9.45 21 18.9"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <circle cx="0" cy="0" r="2" fill="#087ea4"></circle>
      <g stroke="#087ea4" stroke-width="1" fill="none">
        <ellipse rx="10" ry="4.5"></ellipse>
        <ellipse rx="10" ry="4.5" transform="rotate(60)"></ellipse>
        <ellipse rx="10" ry="4.5" transform="rotate(120)"></ellipse>
      </g>
    </svg>
  );
};
