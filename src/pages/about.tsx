import { Layout } from "@/layouts/Layout";
import { type NextPage } from "next";

const About: NextPage = () => {
  return (
    <Layout bg="bg-about-bg">
      <section id="about" className="h-full w-full">
        <div className="mt-16 flex h-full w-full flex-col items-center"></div>
      </section>
    </Layout>
  );
};

export default About;
