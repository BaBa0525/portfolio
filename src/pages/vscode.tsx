import { Tag } from "@/components/vscode/Tag";
import { Layout } from "@/layouts/Layout";
import { type NextPage } from "next";

const Home: NextPage = () => {
  return (
    <Layout bg="bg-primary-vscode-bg">
      <section id="vscode" className="h-full w-full">
        <div className="mt-16 flex h-full w-full flex-col items-center">
          <div className="flex h-8 w-5/6 max-w-screen-md flex-row items-center rounded-t-lg border-b border-slate-500/30 bg-vscode-editor">
            <div className="ml-3 h-2.5 w-2.5 rounded-full bg-slate-600"></div>
            <div className="ml-2 h-2.5 w-2.5 rounded-full bg-slate-600"></div>
            <div className="ml-2 h-2.5 w-2.5 rounded-full bg-slate-600"></div>
          </div>
          <pre className="h-[3/4] w-5/6 max-w-screen-md overflow-auto rounded-b-lg bg-vscode-editor px-8 py-8 ">
            <code className="font-jetbrains-mono text-sm text-white lg:text-lg">
              <Tag name="About" props={{ who: "Cheng-Hsun Wang" }}>
                <Tag name="School" props={{ year: "junior", major: "CS" }}>
                  NYCU
                </Tag>
                <Tag name="WorkingOn" props={{}}>
                  <Tag name="Web" props={{}}>
                    Learning web stuff and puts them into projects
                  </Tag>
                  <Tag name="Reseach" props={{ field: "HCI" }}>
                    Trying to find the balance between the intentions of ads and
                    user experiences
                  </Tag>
                </Tag>
                <Tag name="Hobbies" props={{}}>
                  <Tag name="Learning" props={{}}>
                    Cheng Hsun likes to embrace new things and skills
                  </Tag>
                  <Tag name="Exercise" props={{}}>
                    Badminton
                  </Tag>
                </Tag>
              </Tag>
            </code>
          </pre>
        </div>
      </section>
    </Layout>
  );
};

export default Home;
