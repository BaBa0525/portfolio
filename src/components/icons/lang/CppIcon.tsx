import Image from "next/image";
import { type FC } from "react";
import { type IconProps } from "../types/IconProps";
import cppIcon from "/public/images/icons/cpp.png";

export const CppIcon: FC<IconProps> = ({ className }) => {
  return (
    <Image
      src={cppIcon}
      alt="cpp"
      placeholder="blur"
      className={className}
      draggable={false}
    />
  );
};
