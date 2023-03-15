import { motion } from "framer-motion";
import Image, { type ImageProps } from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import { type FC } from "react";
import { BsDot } from "react-icons/bs";

interface MenubarItemProps extends ImageProps {
  href: string;
  isRendering: boolean;
  clickHandler?: React.MouseEventHandler<HTMLButtonElement>;
}

export const MenubarItem: FC<MenubarItemProps> = ({
  src,
  alt,
  href,
  isRendering,
  clickHandler,
}) => {
  const router = useRouter();
  return (
    <div className="relative h-10 w-10">
      {router.pathname === href && (
        <motion.div
          className="absolute bottom-0 flex w-full translate-y-4 justify-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1 }}
        >
          <BsDot className="self-center" />
        </motion.div>
      )}
      <motion.button
        whileHover={{
          scale: 1.8,
          transition: { type: "spring", stiffness: 400, damping: 10 },
        }}
        whileTap={{ scale: 1.2 }}
        onClick={clickHandler}
        disabled={isRendering}
      >
        <Link href={href} style={isRendering ? { pointerEvents: "none" } : {}}>
          <Image
            className="h-10 w-10 select-none rounded-lg bg-white object-cover p-1 shadow-lg"
            src={src}
            alt={alt}
            draggable={false}
          />
        </Link>
      </motion.button>
    </div>
  );
};
