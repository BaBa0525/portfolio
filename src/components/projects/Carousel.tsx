import { AnimatePresence, motion, wrap } from "framer-motion";
import Image from "next/image";
import { useState, type FC } from "react";
import { AiOutlineLeft, AiOutlineRight } from "react-icons/ai";
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
    <>
      <button
        className="absolute top-1/3 left-0 z-10 mx-4 rounded-full bg-slate-300/40 p-2 lg:-left-8"
        onClick={() => paginate("prev")}
      >
        <AiOutlineLeft className="h-6 w-6" />
      </button>

      <div className="relative w-full">
        <AnimatePresence initial={false} custom={direction}>
          <motion.div
            className="absolute flex flex-col items-center gap-6"
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
              <h2 className="text-xl md:text-2xl">{currentProject?.title}</h2>
              <ul className="flex gap-2">
                {currentProject?.skills.map((s) => (
                  <li key={s.key as string}>{s}</li>
                ))}
              </ul>
              <p className="mt-2 w-[90%] md:text-lg">
                {currentProject?.description}
              </p>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
      <button
        className="absolute top-1/3 right-0 z-10 mx-4 rounded-full bg-slate-300/40 p-2 lg:-right-8"
        onClick={() => paginate("next")}
      >
        <AiOutlineRight className="h-6 w-6" />
      </button>
    </>
  );
};
