import { CppIcon } from "../icons/lang/CppIcon";
import { PythonIcon } from "../icons/lang/PythonIcon";
import { TsIcon } from "../icons/lang/TsIcon";

export const Language = () => {
  return (
    <div className="m-2">
      <h2 className="my-3 -translate-x-2 text-xl">Language</h2>
      <div className="mx-4 grid grid-cols-4 gap-3">
        <CppIcon className="h-10 w-auto" />
        <PythonIcon className="h-10 w-auto" />
        <TsIcon className="h-10 w-10" />
      </div>
    </div>
  );
};
