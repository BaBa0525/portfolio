import { AstroIcon } from "../icons/web/AstroIcon";
import { ExpressIcon } from "../icons/web/ExpressIcon";
import { FastapiIcon } from "../icons/web/FastapiIcon";
import { NextJsIcon } from "../icons/web/NextJsIcon";
import { PrismaIcon } from "../icons/web/PrismaIcon";
import { ReactIcon } from "../icons/web/ReactIcon";
import { TailwindIcon } from "../icons/web/TailwindIcon";

export const Web = () => {
  return (
    <div className="m-2">
      <h2 className="my-3 -translate-x-2 text-xl">Web</h2>
      <div className="mx-4 grid grid-cols-4 gap-3">
        <ReactIcon className="h-10 w-10 fill-skills-react-icon" />
        <NextJsIcon className="h-10 w-10" />
        <AstroIcon className="h-10 w-10" />
        <TailwindIcon className="h-10 w-10 fill-skills-tailwind-icon" />
        <PrismaIcon className="h-10 w-10" />
        <ExpressIcon className="h-10 w-10" />
        <FastapiIcon className="h-10 w-10" />
      </div>
    </div>
  );
};
