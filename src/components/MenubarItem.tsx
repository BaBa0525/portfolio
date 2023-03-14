import Image, { type ImageProps } from "next/image";
import { type FC } from "react";

// interface MenubarItemProp

export const MenubarItem: FC<ImageProps> = ({ src, alt }) => {
  return (
    <>
      <Image
        className="h-10 w-10 select-none rounded-lg bg-white object-cover p-1 shadow-lg"
        src={src}
        alt={alt}
        draggable={false}
      />
    </>
  );
};
