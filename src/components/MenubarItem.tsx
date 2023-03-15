import { motion } from "framer-motion";
import Image, { type ImageProps } from "next/image";
import Link from "next/link";
import { type FC } from "react";

export const MenubarItem: FC<
  ImageProps & {
    url: string;
    isRendering: boolean;
    onClick?: React.MouseEventHandler<HTMLButtonElement>;
  }
> = ({ src, alt, url, isRendering: render, onClick }) => {
  return (
    <>
      <motion.button
        whileHover={{
          scale: 1.8,
          transition: { type: "spring", stiffness: 400, damping: 10 },
        }}
        whileTap={{ scale: 1.2 }}
        onClick={onClick}
        disabled={render}
      >
        <Link href={url} style={render ? { pointerEvents: "none" } : {}}>
          <Image
            className="h-10 w-10 select-none rounded-lg bg-white object-cover p-1 shadow-lg"
            src={src}
            alt={alt}
            draggable={false}
          />
        </Link>
      </motion.button>
    </>
  );
};
