import { ModeStandbyIcon } from "../Icons";
import type { ArticleTitleProps } from "./ArticleTitle.type";

const ArticleTitle = ({ title, iconClassName }: ArticleTitleProps) => {
  return (
    <span className="w-full h-[4rem] flex items-center justify-center gap-[0.8rem] text-[2.6rem] font-[700] select-none">
      <ModeStandbyIcon
        size="2rem"
        className={iconClassName}
      />
      <h3>{title}</h3>
    </span>
  );
};

export default ArticleTitle;
