import { type FC, type PropsWithChildren } from "react";

export const SkillsLayout: FC<PropsWithChildren<{ title: string }>> = ({
  title,
  children,
}) => {
  return (
    <div className="m-2">
      <h2 className="-translate-x-2 text-xl tracking-widest md:text-2xl">
        {title}
      </h2>
      <div className="my-4 mx-4 grid grid-cols-4 gap-3 md:grid-cols-8 lg:gap-5">
        {children}
      </div>
    </div>
  );
};
