import { CppIcon } from "../icons/lang/CppIcon";
import { PythonIcon } from "../icons/lang/PythonIcon";
import { TSIcon } from "../icons/lang/TSIcon";
import { SkillsLayout } from "./SkillsLayout";

export const Language = () => {
  return (
    <SkillsLayout title="Language">
      <CppIcon className="h-10 w-auto" />
      <PythonIcon className="h-10 w-auto" />
      <TSIcon className="h-10 w-10" />
    </SkillsLayout>
  );
};
