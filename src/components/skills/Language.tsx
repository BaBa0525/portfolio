import { CppIcon } from "../icons/lang/CppIcon";
import { PythonIcon } from "../icons/lang/PythonIcon";
import { TSIcon } from "../icons/lang/TSIcon";
import { SkillsLayout } from "./SkillsLayout";

export const Language = () => {
  return (
    <SkillsLayout title="Language">
      <CppIcon className="h-10 w-auto select-none md:h-14" />
      <PythonIcon className="h-10 w-auto select-none md:h-14" />
      <TSIcon className="h-10 w-10 md:h-14 md:w-14" />
    </SkillsLayout>
  );
};
