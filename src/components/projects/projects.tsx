import Image from "next/image";
import { TSIcon } from "../icons/lang/TSIcon";
import { PlanetScaleIcon } from "../icons/projects/PlanetScaleIcon";
import { PostgresIcon } from "../icons/projects/PostgresIcon";
import { NextJsIcon } from "../icons/web/NextJsIcon";
import { PrismaIcon } from "../icons/web/PrismaIcon";
import { TailwindIcon } from "../icons/web/TailwindIcon";
import eathomePic from "/public/images/projects/eathome.png";
import webArchivePic from "/public/images/projects/web-archive.png";

export const projects = [
  {
    image: (
      <Image
        src={webArchivePic}
        alt="web archive"
        className="w-[90%] rounded-md"
        draggable={false}
        placeholder="blur"
      />
    ),
    title: "Web Archive Website",
    description: `It's a website like wayback machine, which allowing the user to go "back in time" and see how websites of NYCU looked in the past`,
    skills: [
      <TSIcon key="ts" className="h-6 w-6 md:h-8 md:w-8" />,
      <NextJsIcon key="nextjs" className="h-6 w-6 md:h-8 md:w-8" />,
      <TailwindIcon
        key="tailwind"
        className="h-6 w-6  fill-skills-tailwind-icon md:h-8 md:w-8"
      />,
      <PrismaIcon key="prisma" className="h-6 w-6 md:h-8 md:w-8" />,
      <PostgresIcon key="postgres" className="h-6 w-6 md:h-8 md:w-8" />,
    ],
    githubLink: "https://github.com/GymSquad/NYCULib-Web-Archive",
  },
  {
    image: (
      <Image
        src={eathomePic}
        alt="web archive"
        className="h-48 w-48 rounded-md"
        draggable={false}
        placeholder="blur"
      />
    ),
    title: "EAtHome",
    description:
      "Developing a simple web-based food ordering platform providing offers essential features similar to those of Uber Eats.",
    skills: [
      <TSIcon key="web-archive2-ts" className="h-6 w-6 md:h-8 md:w-8" />,
      <NextJsIcon
        key="web-archive2-nextjs"
        className="h-6 w-6 md:h-8 md:w-8"
      />,
      <TailwindIcon
        key="web-archive2-tailwind"
        className="h-6 w-6 fill-skills-tailwind-icon md:h-8 md:w-8"
      />,
      <PrismaIcon
        key="web-archive2-prisma"
        className="h-6 w-6 md:h-8 md:w-8"
      />,
      <PlanetScaleIcon
        key="web-archive2-postgres"
        className="h-6 w-6 md:h-8 md:w-8"
      />,
    ],
    githubLink: "https://github.com/PeanuTWaku/EAtHome",
  },
];
