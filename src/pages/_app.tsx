import { type AppType } from "next/dist/shared/lib/utils";
import { JetBrains_Mono } from "next/font/google";

import "@/styles/globals.css";

const jetbrains_mono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-jetbrains-mono",
});

const MyApp: AppType = ({ Component, pageProps }) => {
  return (
    <main className={`${jetbrains_mono.variable} bg-primary-bg`}>
      <Component {...pageProps} />
    </main>
  );
};

export default MyApp;
