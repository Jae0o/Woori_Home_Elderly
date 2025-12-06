import { Card } from "@lib/components";
import { useScrollAnimation } from "@lib/hooks";

import type { SponsorType } from "../../hooks";

import { type Variants, motion } from "motion/react";

interface SponsorTypeCardsProps {
  types: SponsorType[];
}

const SponsorTypeCards = ({ types }: SponsorTypeCardsProps) => {
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

  return (
    <motion.div
      ref={ref as React.RefObject<HTMLDivElement>}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      variants={containerVariants}
      transition={transition}
      className="w-full max-w-[100rem] grid grid-cols-3 gap-[2rem] max-mobile:grid-cols-1"
    >
      {types.map((type, index) => (
        <motion.div
          key={index}
          variants={itemVariants}
        >
          <Card
            variant="default"
            className="p-0 overflow-hidden h-full"
          >
            {/* 헤더: primary 배경 */}
            <div className="w-full bg-primary text-white py-[1.6rem] text-center">
              <p className="text-[1.6rem] font-[600]">{type.title}</p>
            </div>
            {/* 콘텐츠 */}
            <div className="p-[2rem] flex flex-col items-center text-center flex-1 justify-center min-h-[12rem]">
              <p className="text-[1.4rem] text-dark_gray break-keep whitespace-pre-line">{type.description}</p>
            </div>
          </Card>
        </motion.div>
      ))}
    </motion.div>
  );
};

export default SponsorTypeCards;
