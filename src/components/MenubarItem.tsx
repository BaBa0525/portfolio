import Image, { type ImageProps } from "next/image";
import { type FC } from "react";

// interface MenubarItemProp

export const MenubarItem: FC<ImageProps> = ({ src, alt }) => {
  return (
    <>
      <Image
        className="h-10 w-10 transform select-none rounded-lg bg-white object-cover shadow-lg"
        src={src}
        alt={alt}
      />
    </>
  );
};
