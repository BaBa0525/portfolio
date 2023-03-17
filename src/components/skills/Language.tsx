import { CppIcon } from "../icons/lang/CppIcon";
import { PythonIcon } from "../icons/lang/PythonIcon";
import { TsIcon } from "../icons/lang/TsIcon";
import { SkillsLayout } from "./SkillsLayout";

export const Language = () => {
  return (
    <SkillsLayout title="Language">
      <CppIcon className="h-10 w-auto" />
      <PythonIcon className="h-10 w-auto" />
      <TsIcon className="h-10 w-10" />
    </SkillsLayout>
  );
};
