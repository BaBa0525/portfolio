import { Hero } from "@/components/Hero";
import { Layout } from "@/layouts/Layout";
import { type NextPage } from "next";

const Home: NextPage = () => {
  return (
    <Layout>
      <Hero />
    </Layout>
  );
};

export default Home;
