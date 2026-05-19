import Link from "next/link";
import type { ComponentPropsWithoutRef } from "react";

type AnchorProps = ComponentPropsWithoutRef<"a">;
type PreProps = ComponentPropsWithoutRef<"pre">;
type CodeProps = ComponentPropsWithoutRef<"code">;
type BlockquoteProps = ComponentPropsWithoutRef<"blockquote">;
type HeadingProps = ComponentPropsWithoutRef<"h2">;

export const mdxComponents = {
  a: ({ href = "", ...props }: AnchorProps) => {
    const isInternal = href.startsWith("/");

    if (isInternal) {
      return <Link href={href} {...props} />;
    }

    return <a href={href} rel="noreferrer" target="_blank" {...props} />;
  },
  pre: (props: PreProps) => <pre {...props} />,
  code: (props: CodeProps) => <code {...props} />,
  blockquote: (props: BlockquoteProps) => <blockquote {...props} />,
  h2: (props: HeadingProps) => <h2 {...props} />,
  h3: (props: HeadingProps) => <h3 {...props} />
};
