import { ArticleTitle } from "@lib/components";

import type { ContentSectionProps } from "./ContentSection.type";

import { twMerge } from "tailwind-merge";

const ContentSection = ({ title, children, className, maxWidth = "100rem" }: ContentSectionProps) => {
  return (
    <section
      className={twMerge("w-full py-[6rem] px-[2rem] flex flex-col items-center gap-[4rem]", className)}
      style={{ maxWidth }}
    >
      {title && (
        <ArticleTitle
          title={title}
          iconClassName="fill-primary"
        />
      )}

      <div className="w-full flex flex-col items-center">{children}</div>
    </section>
  );
};

export default ContentSection;
