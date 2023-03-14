import Image from "next/image";
import { type FC } from "react";
import { Menubar } from "./Menubar";
import heroPic from "/public/images/hero.jpg";

export const Hero: FC = () => {
  return (
    <section
      id="hsunhsun"
      className="relative flex h-screen flex-col items-center space-y-16 pt-40"
    >
      <Image
        className="h-32 w-32 rounded-full object-cover shadow-xl"
        src={heroPic}
        alt="Only who is smart can see it"
        draggable={false}
      />
      <div className="font-jetbrains-mono text-2xl font-bold text-primary-text"></div>
      <Menubar />
    </section>
  );
};
