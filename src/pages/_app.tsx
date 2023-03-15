import { AnimatePresence } from "framer-motion";
import { type AppType } from "next/dist/shared/lib/utils";
import { JetBrains_Mono } from "next/font/google";

import "@/styles/globals.css";
import { type NextRouter } from "next/router";

const jetbrains_mono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-jetbrains-mono",
});

const MyApp: AppType = ({ Component, pageProps, router }) => {
  return (
    <AnimatePresence mode="wait" initial={false}>
      <main
        className={`${jetbrains_mono.variable} overflow-hidden`}
        key={(router as NextRouter).asPath}
      >
        <Component {...pageProps} />
      </main>
    </AnimatePresence>
  );
};

export default MyApp;
