import { Layout } from "@/layouts/Layout";
import { type NextPage } from "next";
import { FaLock } from "react-icons/fa";

const About: NextPage = () => {
  return (
    <Layout bg="bg-about-bg">
      <section id="about" className="h-full w-full">
        <div className="mt-16 flex h-full w-full flex-col items-center">
          <div className="relative h-3/4 w-4/5 max-w-3xl">
            {/* bar */}
            <div className="absolute top-0 z-10 flex h-14 w-full flex-col items-center justify-center rounded-t-2xl border-b bg-[#FEF2EC] px-3">
              <div className=" flex h-8 w-full flex-row items-center justify-center rounded-full bg-about-navi/20 text-sm leading-snug">
                <FaLock className="mr-2 h-3 w-3 text-gray-400 opacity-60" />
                <span className="text-about-domain">hsunhsun.dev/</span>
                <span className="text-about-slug">about</span>
              </div>
            </div>
            {/* content */}
            <div className="flex h-full rounded-2xl bg-about-web-bg">
              <div className="mt-12 overflow-scroll py-4 px-6 font-enaf text-about-web-text">
                <h2 className="my-3 text-3xl">Who am I</h2>
                <p className="text-lg">
                  Welcome to my portfolio website! I am Cheng-Hsun Wang, a
                  junior studying Computer Science at National Yang Ming Chiao
                  Tung University (NYCU). Currently, I am focusing on frontend
                  development while working on some exciting projects.
                  Additionally, I am conducting research on mobile videos in the
                  field of Human-Computer Interaction, which I find both
                  interesting and challenging.
                </p>
                <h2 className="mb-3 mt-5 text-3xl">My hobbies</h2>
                <p className="text-lg">
                  In my free time, I enjoy playing badminton, my favorite sport,
                  to stay active. As a computer science student, I have a strong
                  passion for learning and expanding my knowledge in the field.
                  I also enjoy trying different cuisines, and it is always an
                  adventure to discover new flavors.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default About;
