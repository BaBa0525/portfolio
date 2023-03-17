import { Layout } from "@/layouts/Layout";
import { type NextPage } from "next";

const Home: NextPage = () => {
  return (
    <Layout bg="bg-projects-bg">
      <section
        id="hsunhsun"
        className="bg-primary-project-bg relative flex h-screen flex-col items-center space-y-16 pt-40"
      >
        <Image
          className="h-32 w-32 rounded-full object-cover shadow-xl"
          src={heroPic}
          alt="Only who is smart can see it"
          draggable={false}
        />
        <div className="text-primary-text font-jetbrains-mono text-2xl font-bold"></div>
      </section>
    </Layout>
  );
};

import Image from "next/image";

import heroPic from "/public/images/hero.jpg";

export default Home;
