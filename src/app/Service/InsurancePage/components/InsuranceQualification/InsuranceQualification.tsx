import type { RefObject } from "react";

import { useScrollAnimation } from "@lib/hooks";

import type { InsuranceQualificationProps } from "./InsuranceQualification.type";

import { motion } from "motion/react";

const InsuranceQualification = ({
  mainDescription,
  processDescription,
  applicationQualification,
}: InsuranceQualificationProps) => {
  const { ref, variants, transition, isInView } = useScrollAnimation({
    type: "slide",
    threshold: 0.2,
  });

  return (
    <motion.div
      ref={ref as RefObject<HTMLDivElement>}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      variants={variants}
      transition={transition}
      className="w-full max-w-[100rem]"
    >
      <div className="space-y-[2rem] text-[1.6rem] leading-[1.7] text-gray-800 break-keep">
        <p>{mainDescription}</p>
        <p>{processDescription}</p>
      </div>

      <div className="mt-[3rem] p-[2.4rem] bg-primary/10 rounded-[1.2rem] border-l-[0.4rem] border-primary">
        <h3 className="text-[1.8rem] font-[700] text-primary mb-[1rem]">{applicationQualification.title}</h3>
        <p className="text-[1.6rem] leading-[1.7] text-gray-800 break-keep">{applicationQualification.description}</p>
      </div>
    </motion.div>
  );
};

export default InsuranceQualification;
