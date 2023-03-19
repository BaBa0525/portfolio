import { Carousel } from "@/components/projects/Carousel";
import { Layout } from "@/layouts/Layout";
import { type NextPage } from "next";

const Home: NextPage = () => {
  return (
    <Layout bg="bg-projects-bg">
      <section
        id="hsunhsun"
        className="bg-primary-project-bg relative flex h-screen flex-col items-center space-y-16 pt-28"
      >
        <Carousel />
      </section>
    </Layout>
  );
};

export default Home;
