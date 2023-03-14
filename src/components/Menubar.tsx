import { type FC } from "react";
import { MenubarItem } from "./MenubarItem";
import homePic from "/public/images/navbar/home.png";

export const Menubar: FC = () => {
  return (
    <nav className="fixed bottom-10 flex h-16 items-center justify-between gap-10 rounded-2xl border-[1px] border-black/10 bg-nav/20 px-10 shadow-2xl backdrop-blur-sm backdrop-brightness-100">
      <MenubarItem src={homePic} alt="home" />
    </nav>
  );
};
