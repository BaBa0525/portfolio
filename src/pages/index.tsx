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
        className="relative flex flex-col items-center justify-center gap-16 lg:gap-20 2xl:gap-24"
      >
        <div className="space-y-16 lg:space-y-20">
          <div className="flex w-full justify-center">
            <Image
              className="h-40 w-40 rounded-full object-cover shadow-xl lg:h-60 lg:w-60"
              src={homePic}
              alt="Only who is smart can see it"
              draggable={false}
              placeholder="blur"
            />
          </div>
          <div className="text-primary-text text-center font-jetbrains-mono text-xl font-bold lg:text-2xl 2xl:text-3xl">
            <Greeting />
          </div>
        </div>

        <div className="flex gap-6 lg:gap-10 2xl:gap-14">
          <Link
            href="https://github.com/BaBa0525"
            target="_blank"
            rel="noreferrer noopener"
          >
            <BsGithub className="h-8 w-8 lg:h-10 lg:w-10 2xl:h-12 2xl:w-12" />
          </Link>
          <Link
            href="https://www.linkedin.com/in/hsunhsun/"
            target="_blank"
            rel="noreferrer noopener"
          >
            <BsLinkedin className="h-8 w-8 text-home-linkedin lg:h-10 lg:w-10 2xl:h-12 2xl:w-12" />
          </Link>
        </div>
      </section>
    </Layout>
  );
};

export default Home;
