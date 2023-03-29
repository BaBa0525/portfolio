import { Layout } from "@/layouts/Layout";
import { zodResolver } from "@hookform/resolvers/zod";
import { type NextPage } from "next";
import Image from "next/image";
import { useForm } from "react-hook-form";
import { z } from "zod";
import approvedPic from "/public/images/contact/approved.png";
import paperPlanePic from "/public/images/contact/paper-plane.png";
import paperPic from "/public/images/contact/paper.png";

const EmailSchema = z.object({
  subject: z.string().min(1, "subject must be specified"),
  body: z.string().min(1, "Anything to say?"),
});

type Email = z.infer<typeof EmailSchema>;

const Contact: NextPage = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Email>({
    resolver: zodResolver(EmailSchema),
  });

  const handleEmailSubmit = ({ subject, body }: Email) => {
    window.location.href = `mailto:hsunhsun0525@gmail.com?subject=${subject}&body=${body}`;
  };

  return (
    <Layout bg="bg-contact-bg">
      <section
        id="contact"
        className="relative flex w-full flex-col items-center"
      >
        <h1 className="pt-16 text-2xl uppercase tracking-[20px] text-contact-title md:text-3xl lg:pb-10">
          Contact
        </h1>
        <div className="relative flex h-4/5 w-full justify-center">
          <Image
            className="invisible absolute h-3/4 w-auto -translate-x-2/3 translate-y-1/3 select-none lg:visible"
            src={paperPlanePic}
            alt=""
            placeholder="blur"
            draggable={false}
          />
          <div className="relative z-10 flex h-full w-full max-w-xl flex-col items-center space-y-8 py-10 lg:translate-x-1/2">
            <Image
              className="absolute h-full w-full select-none"
              placeholder="blur"
              src={paperPic}
              alt=""
              draggable={false}
            />
            <form
              className="relative z-10 flex w-5/6 flex-col items-center gap-2 rounded-md px-6 pt-8 font-caveat text-xl font-semibold"
              onSubmit={(e) => void handleSubmit(handleEmailSubmit)(e)}
            >
              <fieldset className="w-full space-y-2 px-4">
                <label
                  htmlFor="subject"
                  className="mt-4 block text-2xl tracking-wider md:text-3xl"
                >
                  Subject
                </label>
                {errors.subject && (
                  <span className="text-sm text-red-400 md:text-lg">
                    {errors.subject.message}
                  </span>
                )}
                <input
                  className="notes w-full rounded-sm px-3 py-2"
                  id="subject"
                  {...register("subject")}
                />
              </fieldset>
              <fieldset className="w-full space-y-2 px-4">
                <label htmlFor="body" className="block text-2xl md:text-3xl">
                  Body
                </label>
                {errors.body && (
                  <span className="text-sm text-red-400 md:text-lg">
                    {errors.body.message}
                  </span>
                )}
                <textarea
                  className="notes bg-hero-bg-bg h-48 w-full resize-none rounded-sm px-3 py-2 md:text-2xl"
                  id="body"
                  {...register("body")}
                />
              </fieldset>
              <button className="translate-x-20">
                <Image
                  className="h-24 w-24 select-none md:h-40 md:w-40"
                  src={approvedPic}
                  alt=""
                  placeholder="blur"
                  draggable={false}
                />
              </button>
            </form>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Contact;
