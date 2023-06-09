import { Language } from "@/components/skills/Language";
import { Others } from "@/components/skills/Others";
import { Web } from "@/components/skills/Web";
import { Layout } from "@/layouts/Layout";
import { type NextPage } from "next";

const Home: NextPage = () => {
  return (
    <Layout bg="bg-skills-bg">
      <section
        id="skills"
        className="relative flex flex-col items-center space-y-16"
      >
        <h1 className="text-2xl tracking-[20px] text-skills-title md:text-3xl">
          SKILLS
        </h1>
        <div className="flex flex-col justify-center gap-2">
          <Language />
          <Web />
          <Others />
        </div>
      </section>
    </Layout>
  );
};

export default Home;
