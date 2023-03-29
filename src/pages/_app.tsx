import { AnimatePresence } from "framer-motion";
import { type AppType } from "next/dist/shared/lib/utils";
import {
  Caveat,
  Edu_NSW_ACT_Foundation,
  JetBrains_Mono,
} from "next/font/google";

import "@/styles/globals.css";
import { type NextRouter } from "next/router";

const JetbrainsMonoFont = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-jetbrains-mono",
});

const CaveatFont = Caveat({
  subsets: ["latin"],
  variable: "--font-caveat",
});

const ENAFFont = Edu_NSW_ACT_Foundation({
  subsets: ["latin"],
  variable: "--font-edu-nsw-act-foundation",
});

const MyApp: AppType = ({ Component, pageProps, router }) => {
  return (
    <AnimatePresence mode="wait" initial={false}>
      <main
        className={`${JetbrainsMonoFont.variable} ${CaveatFont.variable} ${ENAFFont.variable} h-full overflow-hidden`}
        key={(router as NextRouter).asPath}
      >
        <Component {...pageProps} />
      </main>
    </AnimatePresence>
  );
};

export default MyApp;
