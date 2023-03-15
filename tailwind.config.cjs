// eslint-disable-next-line @typescript-eslint/no-var-requires
const defaultTheme = require("tailwindcss/defaultTheme");

/** @type {import('tailwindcss').Config} */
const config = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: {
          "hero-bg": "#f7f0e0",
          "vscode-bg": "#d8909c",
          text: "#323232",
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
