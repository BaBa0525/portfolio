import { DockerIcon } from "../icons/others/DockerIcon";
import { GitIcon } from "../icons/others/GitIcon";
import { SkillsLayout } from "./SkillsLayout";

export const Others = () => {
  return (
    <SkillsLayout title="Others">
      <DockerIcon className="h-10 w-10 md:h-14 md:w-14" />
      <GitIcon className="h-10 w-10 md:h-14 md:w-14" />
    </SkillsLayout>
  );
};
