import { AnimatePresence, motion, wrap } from "framer-motion";
import Image from "next/image";
import { useState, type FC } from "react";
import { projects } from "./projects";

type Direction = "next" | "prev";

const variants = {
  enter: (direction: Direction) => {
    return {
      x: direction === "next" ? 1000 : -1000,
      opacity: 0,
    };
  },
  center: {
    zIndex: 1,
    x: 0,
    opacity: 1,
  },
  exit: (direction: Direction) => {
    return {
      zIndex: 0,
      x: direction === "prev" ? 1000 : -1000,
      opacity: 0,
    };
  },
};

const swipeConfidenceThreshold = 10000;
const swipePower = (offset: number, velocity: number) => {
  return Math.abs(offset) * velocity;
};

export const Carousel: FC = () => {
  const [[page, direction], setPage] = useState<[number, Direction]>([
    0,
    "next",
  ]);

  const currentProject = projects[page];

  const paginate = (newDirection: Direction) => {
    if (newDirection === "prev")
      setPage(([p]) => [wrap(0, projects.length, p - 1), newDirection]);
    if (newDirection === "next")
      setPage(([p]) => [wrap(0, projects.length, p + 1), newDirection]);
  };

  return (
    <div className="relative w-full">
      <AnimatePresence initial={false} custom={direction}>
        <motion.div
          className="absolute flex flex-col items-center gap-8"
          key={page}
          custom={direction}
          variants={variants}
          initial="enter"
          animate="center"
          exit="exit"
          transition={{
            x: { type: "spring", stiffness: 300, damping: 30 },
            opacity: { duration: 0.2 },
          }}
          drag="x"
          dragConstraints={{ left: 0, right: 0 }}
          dragElastic={1}
          onDragEnd={(e, { offset, velocity }) => {
            const swipe = swipePower(offset.x, velocity.x);

            if (swipe < -swipeConfidenceThreshold) {
              paginate("next");
            } else if (swipe > swipeConfidenceThreshold) {
              paginate("prev");
            }
          }}
        >
          {currentProject && (
            <Image
              src={currentProject.image}
              alt="web archive"
              className="w-[90%] rounded-md"
              draggable={false}
            />
          )}
          <div className="flex flex-col items-center gap-3">
            <h2 className="text-xl">{currentProject?.title}</h2>
            <ul className="flex gap-2">
              {currentProject?.skills.map((s) => (
                <li key={s.key as string}>{s}</li>
              ))}
            </ul>
            <p className="mt-2 w-[90%]">{currentProject?.description}</p>
          </div>
        </motion.div>
      </AnimatePresence>
      {/* <span onClick={() => paginate("next")}>next</span>
        <span onClick={() => paginate("prev")}>prev</span> */}
    </div>
  );
};
