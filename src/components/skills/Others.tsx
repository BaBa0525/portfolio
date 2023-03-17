import { DockerIcon } from "../icons/others/DockerIcon";

export const Others = () => {
  return (
    <div className="m-2">
      <h2 className="my-3 -translate-x-2 text-xl">Others</h2>
      <div className="mx-4 grid grid-cols-4 gap-3">
        <DockerIcon className="h-10 w-10" />
      </div>
    </div>
  );
};
