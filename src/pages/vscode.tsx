import { Layout } from "@/layouts/Layout";
import { type NextPage } from "next";

const Home: NextPage = () => {
  return (
    <Layout bg="bg-primary-vscode-bg">
      <section
        id="hsunhsun"
        className="relative flex h-screen flex-col items-center space-y-16 bg-primary-vscode-bg pt-40"
      >
        <Image
          className="h-32 w-32 rounded-full object-cover shadow-xl"
          src={heroPic}
          alt="Only who is smart can see it"
          draggable={false}
        />
        <div className="font-jetbrains-mono text-2xl font-bold text-primary-text"></div>
      </section>
    </Layout>
  );
};

import Image from "next/image";

import heroPic from "/public/images/hero.jpg";

export default Home;
