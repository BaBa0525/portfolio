import homePic from "/public/images/navbar/home.png";
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
    src: projectPic,
    alt: "project",
    href: "/project",
    color: "var(--project-primary)",
  },
];
