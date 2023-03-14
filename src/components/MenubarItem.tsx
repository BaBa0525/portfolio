import { motion } from "framer-motion";
import Image, { type ImageProps } from "next/image";
import { type FC } from "react";

export const MenubarItem: FC<ImageProps> = ({ src, alt }) => {
  return (
    <>
      <motion.button
        whileHover={{
          scale: 1.2,
          transition: { type: "spring", stiffness: 400, damping: 10 },
        }}
        whileTap={{ scale: 0.9 }}
      >
        <Image
          className="h-10 w-10 select-none rounded-lg bg-white object-cover p-1 shadow-lg"
          src={src}
          alt={alt}
          draggable={false}
        />
      </motion.button>
    </>
  );
};
