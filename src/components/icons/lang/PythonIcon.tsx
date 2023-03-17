import Image from "next/image";
import { type FC } from "react";
import { type IconProps } from "../types/IconProps";
import pythonPic from "/public/images/icons/python.png";

export const PythonIcon: FC<IconProps> = ({ className }) => {
  return <Image src={pythonPic} alt="python" className={className} />;
};
