import { Card } from "@lib/components";
import { useScrollAnimation } from "@lib/hooks";

import type { HomeCareGuideProps } from "./HomeCareGuide.type";

import { type Variants, motion } from "motion/react";

const HomeCareGuide = ({ guideData }: HomeCareGuideProps) => {
  const { ref, transition, isInView } = useScrollAnimation({
    type: "stagger",
    threshold: 0.1,
    staggerDelay: 0.1,
  });

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: "easeOut",
      },
    },
  };

  const renderContent = (content: string | string[]) => {
    if (typeof content === "string") {
      return <p className="text-[1.6rem] leading-[1.8] text-gray-700 break-keep">{content}</p>;
    }

    return (
      <ul className="space-y-[1.2rem]">
        {content.map((item, index) => (
          <li
            key={index}
            className="text-[1.6rem] leading-[1.8] text-gray-700 break-keep flex items-start gap-[0.8rem]"
          >
            <span className="text-primary font-[700] mt-[0.2rem]">•</span>
            <span className="flex-1">{item}</span>
          </li>
        ))}
      </ul>
    );
  };

  return (
    <motion.div
      ref={ref as React.RefObject<HTMLDivElement>}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      variants={containerVariants}
      transition={transition}
      className="w-full max-w-[100rem] grid grid-cols-1 md:grid-cols-3 gap-[2.4rem] max-mobile:gap-[1.6rem] items-stretch"
    >
      {guideData.map((guide, index) => (
        <motion.div
          key={index}
          variants={itemVariants}
          className="h-full"
        >
          <Card
            variant="default"
            className="h-full flex flex-col"
          >
            <h3 className="text-[2rem] font-[700] text-primary mb-[2rem] max-mobile:text-[1.8rem] max-mobile:mb-[1.6rem]">
              {guide.title}
            </h3>
            {renderContent(guide.content)}
          </Card>
        </motion.div>
      ))}
    </motion.div>
  );
};

export default HomeCareGuide;
