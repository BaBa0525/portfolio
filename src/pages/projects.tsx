import { Carousel } from "@/components/projects/Carousel";

import { Layout } from "@/layouts/Layout";
import { type NextPage } from "next";

const Home: NextPage = () => {
  return (
    <Layout bg="bg-projects-bg">
      <section
        id="hsunhsun"
        className="relative flex h-screen w-full justify-center"
      >
        <div className="relative flex h-screen w-full max-w-2xl flex-col items-center space-y-16 pt-16 lg:pt-12">
          <h1 className="text-2xl uppercase tracking-[20px] text-[#817C74] md:text-3xl">
            Projects
          </h1>
          <Carousel />
        </div>
      </section>
    </Layout>
  );
};

export default Home;
