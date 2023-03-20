// eslint-disable-next-line @typescript-eslint/no-var-requires
const defaultTheme = require("tailwindcss/defaultTheme");

/** @type {import('tailwindcss').Config} */
const config = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        hero: {
          bg: "var(--home-bg)",
          text: "#323232",
        },
        vscode: {
          bg: "var(--vscode-bg)",
          element: "#e3c07b",
          attr: "#d19a66",
          operator: "#56b6c2",
          string: "#98c379",
          editor: "#1e293c",
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
        },
        nav: "#f6f6f6",
      },
      fontFamily: {
        "jetbrains-mono": [
          "var(--font-jetbrains-mono)",
          ...defaultTheme.fontFamily.mono,
        ],
      },
    },
  },
  plugins: [],
};

module.exports = config;
