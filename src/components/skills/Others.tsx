import { DockerIcon } from "../icons/others/DockerIcon";
import { GitIcon } from "../icons/others/GitIcon";
import { SkillsLayout } from "./SkillsLayout";

export const Others = () => {
  return (
    <SkillsLayout title="Others">
      <DockerIcon className="h-10 w-10" />
      <GitIcon className="h-10 w-10" />
    </SkillsLayout>
  );
};
