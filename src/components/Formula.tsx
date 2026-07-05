import katex from "katex";
import "katex/dist/katex.min.css";

type Props = {
  latex: string;
  block?: boolean;
};

export function Formula({ latex, block = true }: Props) {
  const html = katex.renderToString(latex, {
    throwOnError: false,
    displayMode: block,
  });

  return (
    <div
      className={block ? "formula-block" : "formula-inline"}
      dangerouslySetInnerHTML={{ __html: html }}
    />
  );
}
