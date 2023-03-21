import { Greeting } from "@/components/hero/Greeting";
import { Layout } from "@/layouts/Layout";
import { type NextPage } from "next";
import Image from "next/image";
import Link from "next/link";
import { BsGithub, BsLinkedin } from "react-icons/bs";
import homePic from "/public/images/hsunhsun.jpg";

const Home: NextPage = () => {
  return (
    <Layout bg="bg-home-bg">
      <section
        id="home"
        className="relative flex flex-col items-center space-y-16 pt-40"
      >
        <Image
          className="h-40 w-40 rounded-full object-cover shadow-xl"
          src={homePic}
          alt="Only who is smart can see it"
          draggable={false}
        />
        <div className="text-primary-text text-center font-jetbrains-mono text-xl font-bold">
          <Greeting />
        </div>
        <div className="flex gap-6">
          <Link href="https://github.com/BaBa0525">
            <BsGithub className="h-8 w-8" />
          </Link>
          <Link href="https://www.linkedin.com/in/hsunhsun/">
            <BsLinkedin className="h-8 w-8 text-home-linkedin" />
          </Link>
        </div>
      </section>
    </Layout>
  );
};

export default Home;
