import { useScrollAnimation } from "@lib/hooks";

import { motion } from "motion/react";

interface SectionHeaderProps {
  title: string;
  subtitle?: string;
  showDivider?: boolean;
}

const SectionHeader = ({ title, subtitle, showDivider = true }: SectionHeaderProps) => {
  const { ref, variants, transition, isInView } = useScrollAnimation({
    type: "fade",
    threshold: 0.1,
  });

  return (
    <motion.div
      ref={ref as React.RefObject<HTMLDivElement>}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      variants={variants}
      transition={transition}
      className="w-full max-w-[100rem] pt-[6rem] pb-[2rem] px-[2rem]"
    >
      {/* 구분선 */}
      {showDivider && <div className="w-full border-t-[0.1rem] border-gray mb-[4rem]" />}

      {/* 헤더 */}
      <div className="flex items-center gap-[1.2rem]">
        <div className="w-[0.4rem] h-[4rem] bg-primary rounded-full" />
        <div className="flex flex-col gap-[0.4rem]">
          <h2 className="text-[2.4rem] font-[700] text-black max-mobile:text-[2rem]">{title}</h2>
          {subtitle && <span className="text-[1.4rem] text-dark_gray max-mobile:text-[1.2rem]">{subtitle}</span>}
        </div>
      </div>
    </motion.div>
  );
};

export default SectionHeader;
