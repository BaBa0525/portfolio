import mailPic from "/public/images/mail.png";
import aboutPic from "/public/images/navbar/about.png";
import homePic from "/public/images/navbar/home.png";
import lightBulbPic from "/public/images/navbar/light-bulb.png";
import projectPic from "/public/images/navbar/projects.png";

export const MenuItemInfo = [
  {
    src: homePic,
    alt: "home",
    href: "/",
    color: "var(--home-bg)",
  },
  {
    src: aboutPic,
    alt: "about",
    href: "/about",
    color: "var(--about-bg)",
  },
  {
    src: lightBulbPic,
    alt: "skills",
    href: "/skills",
    color: "var(--skills-bg)",
  },
  {
    src: projectPic,
    alt: "projects",
    href: "/projects",
    color: "var(--projects-bg)",
  },
  {
    src: mailPic,
    alt: "contact",
    href: "/contact",
    color: "var(--contact-bg)",
  },
];
