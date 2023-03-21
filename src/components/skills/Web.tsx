import { AstroIcon } from "../icons/web/AstroIcon";
import { ExpressIcon } from "../icons/web/ExpressIcon";
import { FastapiIcon } from "../icons/web/FastapiIcon";
import { NextJsIcon } from "../icons/web/NextJsIcon";
import { PrismaIcon } from "../icons/web/PrismaIcon";
import { ReactIcon } from "../icons/web/ReactIcon";
import { TailwindIcon } from "../icons/web/TailwindIcon";
import { SkillsLayout } from "./SkillsLayout";

export const Web = () => {
  return (
    <SkillsLayout title="Web">
      <ReactIcon className="h-10 w-10 fill-skills-react-icon md:h-14 md:w-14" />
      <NextJsIcon className="h-10 w-10 md:h-14 md:w-14" />
      <AstroIcon className="h-10 w-10 md:h-14 md:w-14" />
      <TailwindIcon className="h-10 w-10 fill-skills-tailwind-icon  md:h-14 md:w-14" />
      <PrismaIcon className="h-10 w-10 md:h-14 md:w-14" />
      <ExpressIcon className="h-10 w-10 md:h-14 md:w-14" />
      <FastapiIcon className="h-10 w-10 md:h-14 md:w-14" />
    </SkillsLayout>
  );
};
