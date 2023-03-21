import { Layout } from "@/layouts/Layout";
import { zodResolver } from "@hookform/resolvers/zod";
import { type NextPage } from "next";
import Image from "next/image";
import { useForm } from "react-hook-form";
import { z } from "zod";
import approvedPic from "/public/images/contact/approved.png";
import paperPic from "/public/images/contact/paper.png";

const EmailSchema = z.object({
  subject: z.string().min(1, "subject must be specified"),
  body: z.string().min(1, "no no no"),
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
        className="relative flex h-screen flex-col items-center space-y-8 pt-16 lg:w-1/2"
      >
        <h1 className="text-2xl uppercase tracking-[20px] text-[#355E82]">
          Contact
        </h1>

        <Image className="absolute h-4/5 w-full" src={paperPic} alt="" />
        <form
          className="relative z-10 flex w-5/6 flex-col items-center gap-2 rounded-md px-6 pt-8 font-caveat text-xl font-semibold"
          onSubmit={(e) => void handleSubmit(handleEmailSubmit)(e)}
        >
          <fieldset className="w-full space-y-2 px-4">
            <label htmlFor="subject" className="block text-xl tracking-wider">
              Subject
            </label>
            {errors.subject && (
              <span className="text-sm text-red-400">
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
            <label htmlFor="body" className="block text-xl">
              Body
            </label>
            {errors.body && (
              <span className="text-sm text-red-400">
                {errors.body.message}
              </span>
            )}
            <textarea
              className="notes bg-hero-bg-bg h-48 w-full resize-none rounded-sm px-3 py-2"
              id="body"
              {...register("body")}
            />
          </fieldset>
          <button className="translate-x-20">
            <Image className="h-20 w-20" src={approvedPic} alt="" />
          </button>
        </form>
      </section>
    </Layout>
  );
};

export default Contact;
