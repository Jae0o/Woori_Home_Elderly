import { useScrollAnimation } from "@lib/hooks";

import type { InsuranceIntroductionProps } from "./InsuranceIntroduction.type";

import { motion } from "motion/react";

const InsuranceIntroduction = ({ content }: InsuranceIntroductionProps) => {
  const { ref, variants, transition, isInView } = useScrollAnimation({
    type: "fade",
    threshold: 0.2,
  });

  return (
    <motion.div
      ref={ref as React.RefObject<HTMLDivElement>}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      variants={variants}
      transition={transition}
      className="w-full max-w-[80rem] text-center px-[2rem]"
    >
      <p className="text-[1.8rem] max-mobile:text-[1.6rem] leading-[1.8] max-mobile:leading-[1.9] font-[500] text-gray-800 break-keep">
        {content}
      </p>
    </motion.div>
  );
};

export default InsuranceIntroduction;
