import { Carousel } from "@/components/projects/Carousel";

import { Layout } from "@/layouts/Layout";
import { type NextPage } from "next";

const Home: NextPage = () => {
  return (
    <Layout bg="bg-projects-bg">
      <section
        id="hsunhsun"
        className="relative flex h-screen flex-col items-center space-y-16 pt-16"
      >
        <h1 className="text-2xl uppercase tracking-[20px] text-[#817C74]">
          Projects
        </h1>
        <Carousel />
      </section>
    </Layout>
  );
};

export default Home;
