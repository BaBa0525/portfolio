import { type FC } from "react";
import { type IconProps } from "../types/IconProps";

export const FastapiIcon: FC<IconProps> = ({ className }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      height="40"
      width="40"
      viewBox="0 0 154 154"
      className={className}
    >
      <circle cx="77" cy="77" fill="#05998b" r="77" />
      <path
        d="M81.375 18.667l-38.75 70H77.5l-3.875 46.666 38.75-70H77.5z"
        fill="#fff"
      />
    </svg>
  );
};
