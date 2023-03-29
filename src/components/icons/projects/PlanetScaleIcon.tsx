import { type FC } from "react";
import { type IconProps } from "../types/IconProps";

export const PlanetScaleIcon: FC<IconProps> = ({ className }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="256px"
      height="256px"
      viewBox="0 0 256 256"
      version="1.1"
      preserveAspectRatio="xMidYMid"
      className={className}
    >
      <title>PlanetScale</title>
      <g>
        <path
          d="M256,128.044218 C255.976145,198.701382 198.701382,255.976145 128.044218,256 L128.044218,256 Z M128,0 C179.977309,0 224.718545,30.9806545 244.765091,75.4833455 L75.4833455,244.765091 C68.2193455,241.492945 61.3149091,237.562764 54.84736,233.050182 L159.8976,128 L128,128 L37.4903855,218.509382 C14.3269236,195.346036 0,163.346036 0,128 C0,57.30752 57.3075782,0 128,0 Z"
          fill="#000000"
        />
      </g>
    </svg>
  );
};
