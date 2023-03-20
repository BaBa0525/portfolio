import type { FC } from "react";
import Typewriter from "typewriter-effect";

export const Greeting: FC = () => {
  return (
    <Typewriter
      onInit={(typewriter) => {
        typewriter
          .typeString("Hello, I am Cheng-Hsun Wang")
          .start()
          .pauseFor(2000)
          .deleteAll()
          .typeString("Or just call me Hsunhsun :D")
          .pauseFor(2000)
          .deleteAll();
      }}
      options={{
        loop: true,
      }}
    ></Typewriter>
  );
};
