import { type FC } from "react";
import homePic from "/public/images/navbar/home.png";
import projectPic from "/public/images/navbar/project.png";
import vscodePic from "/public/images/navbar/vscode.png";

import { motion } from "framer-motion";
import { atom, useAtom } from "jotai";
import { MenubarItem } from "./MenubarItem";

const renderColorAtom = atom("var(--home-primary)");
const isRenderingAtom = atom(false);

const MenuItemInfo = [
  {
    src: homePic,
    alt: "home",
    href: "/",
    color: "var(--home-primary)",
  },
  {
    src: vscodePic,
    alt: "vscode",
    href: "/vscode",
    color: "var(--vscode-primary)",
  },
  {
    src: projectPic,
    alt: "project",
    href: "/project",
    color: "var(--project-primary)",
  },
];

export const Menubar: FC = () => {
  // const w = window.innerWidth;
  // const h = window.innerHeight;

  const [color, setColor] = useAtom(renderColorAtom);
  const [isRendering, setRendering] = useAtom(isRenderingAtom);

  return (
    <>
      <motion.nav
        className="fixed bottom-10 z-10 flex h-16 items-center justify-between gap-10 rounded-2xl border border-black/10 bg-nav/20 px-10 pb-1 shadow-2xl backdrop-blur-sm backdrop-brightness-100"
        initial={{ y: "150%" }}
        animate={{ y: 0 }}
        exit={{ y: "150%" }}
        transition={{ duration: 0.8 }}
        onAnimationStart={() => setRendering(true)}
        onAnimationComplete={() => setRendering(false)}
      >
        {MenuItemInfo.map((info) => (
          <MenubarItem
            {...info}
            key={info.alt}
            onClick={() => {
              setColor(info.color);
            }}
            isRendering={isRendering}
          ></MenubarItem>
        ))}
      </motion.nav>

      <motion.div
        className="absolute bottom-0 h-10 w-10 translate-y-1/2 rounded-full transition-colors duration-1000"
        style={{ background: color }}
        animate={{ visibility: "hidden" }}
        exit={{
          visibility: "visible",
          scale: 100,
          transition: { duration: 1.2 },
        }}
        transition={{ duration: 1 }}
      />
    </>
  );
};
