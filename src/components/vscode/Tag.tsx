import { type FC, type PropsWithChildren } from "react";

type TagProps = PropsWithChildren<{
  name: string;
  props: Record<string, string | number>;
}>;

export const Tag: FC<TagProps> = ({ name, props, children }) => {
  return (
    <>
      <p>
        <span>{"<"}</span>
        <span className="text-about-element">{`${name}`}</span>

        <span>
          {Object.entries(props).map(([propName, value]) => (
            <>
              <span className="text-about-attr">{` ${propName}`}</span>
              <span className="text-about-operator">=</span>
              {typeof value === "string" ? (
                <span className="text-about-string">{`"${value}"`}</span>
              ) : (
                <>
                  <span className="text-about-operator">{"{"}</span>
                  <span className="text-about-attr">{`${value}`}</span>
                  <span className="text-about-operator">{"}"}</span>
                </>
              )}
            </>
          ))}
        </span>
        <span>{">"}</span>
      </p>
      <p
        className="whitespace-normal break-words"
        style={{ paddingLeft: "2ch" }}
      >
        {children}
      </p>
      <p>
        <span>{"</"}</span>
        <span className="text-vscode-element">{`${name}`}</span>
        <span>{">"}</span>
      </p>
    </>
  );
};
