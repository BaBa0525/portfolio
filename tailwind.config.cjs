// eslint-disable-next-line @typescript-eslint/no-var-requires
const defaultTheme = require("tailwindcss/defaultTheme");

/** @type {import('tailwindcss').Config} */
const config = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        home: {
          bg: "var(--home-bg)",
          text: "#323232",
          linkedin: "#0c66c2",
        },
        about: {
          bg: "var(--about-bg)",
          domain: "#99a1b3",
          slug: "#5e697e",
          navi: "#99a1b3",
          web: {
            bg: "#fef2ec",
            text: "#3a1503",
          },
        },
        skills: {
          bg: "var(--skills-bg)",
          "tailwind-icon": "#06b6d4",
          "react-icon": "#087ea4",
          title: "#a2b865",
        },
        projects: {
          bg: "var(--projects-bg)",
        },
        contact: {
          bg: "var(--contact-bg)",
          title: "#355e82",
        },
        nav: "#f6f6f6",
      },
      fontFamily: {
        "jetbrains-mono": [
          "var(--font-jetbrains-mono)",
          ...defaultTheme.fontFamily.mono,
        ],
        caveat: ["var(--font-caveat)", ...defaultTheme.fontFamily.sans],
        enaf: [
          "var(--font-edu-nsw-act-foundation)",
          ...defaultTheme.fontFamily.sans,
        ],
      },
    },
  },
  plugins: [],
};

module.exports = config;
