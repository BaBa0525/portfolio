import { useEffect, type FC } from "react";

import { motion } from "framer-motion";
import { atom, useAtom } from "jotai";
import { MenubarItem } from "./MenubarItem";
import { MenuItemInfo } from "./MenuItemInfo";

const renderColorAtom = atom("var(--home-primary)");
const isRenderingAtom = atom(false);
const diameterAtom = atom(0);

export const Menubar: FC = () => {
  const [color, setColor] = useAtom(renderColorAtom);
  const [diameter, setDiameter] = useAtom(diameterAtom);
  const [isRendering, setRendering] = useAtom(isRenderingAtom);

  useEffect(() => {
    const resizeHandler = () => {
      if (window) {
        const d = Math.round(
          Math.max(window.innerWidth, window.innerHeight) / 10
        );
        setDiameter(d);
      }
    };
    window.addEventListener("resize", resizeHandler);
    resizeHandler();
    return () => window.removeEventListener("resize", resizeHandler);
  });

  return (
    <>
      <motion.nav
        className="fixed bottom-8 z-10 flex h-16 items-center justify-between gap-6 rounded-2xl border border-black/10 bg-nav/20 px-6 pb-1 shadow-2xl backdrop-blur-sm backdrop-brightness-100 2xl:bottom-10 2xl:h-20 2xl:gap-8 2xl:px-8"
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
            clickHandler={() => setColor(info.color)}
            isRendering={isRendering}
          ></MenubarItem>
        ))}
      </motion.nav>

      <motion.div
        className="absolute bottom-0 z-10 translate-y-1/2 rounded-full transition-colors duration-1000"
        style={{ background: color, height: diameter, width: diameter }}
        animate={{ visibility: "hidden" }}
        exit={{
          visibility: "visible",
          scale: 30,
          transition: { duration: 1.2 },
        }}
        transition={{ duration: 1 }}
      />
    </>
  );
};
