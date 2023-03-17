import homePic from "/public/images/navbar/home.png";
import lightBulbPic from "/public/images/navbar/light-bulb.png";
import projectPic from "/public/images/navbar/project.png";
import vscodePic from "/public/images/navbar/vscode.png";

export const MenuItemInfo = [
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
    src: lightBulbPic,
    alt: "skills",
    href: "/skills",
    color: "var(--skills-primary)",
  },
  {
    src: projectPic,
    alt: "project",
    href: "/project",
    color: "var(--project-primary)",
  },
];
