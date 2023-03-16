import { Greeting } from "@/components/Greeting";
import { Layout } from "@/layouts/Layout";
import { type NextPage } from "next";
import Image from "next/image";
import heroPic from "/public/images/hero.jpg";

const Home: NextPage = () => {
  return (
    <Layout bg="bg-primary-hero-bg">
      <section
        id="hero"
        className="relative flex flex-col items-center space-y-16 pt-40"
      >
        <Image
          className="h-32 w-32 rounded-full object-cover shadow-xl"
          src={heroPic}
          alt="Only who is smart can see it"
          draggable={false}
        />
        <div className="font-jetbrains-mono text-2xl font-bold text-primary-text">
          <Greeting />
        </div>
      </section>
    </Layout>
  );
};

export default Home;
