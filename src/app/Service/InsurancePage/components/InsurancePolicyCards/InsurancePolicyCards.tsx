import { Card } from "@lib/components";
import { useScrollAnimation } from "@lib/hooks";

import type { InsurancePolicyCardsProps } from "./InsurancePolicyCards.type";

import { type Variants, motion } from "motion/react";

const InsurancePolicyCards = ({ cards }: InsurancePolicyCardsProps) => {
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
      className="w-full max-w-[100rem] grid grid-cols-1 md:grid-cols-3 gap-[2.4rem]"
    >
      {cards.map((card, index) => (
        <motion.div
          key={index}
          variants={itemVariants}
        >
          <Card variant="default">
            <div className="text-[4rem] font-[700] text-primary/30 mb-[1rem]">{index + 1}</div>
            <h3 className="text-[2rem] font-[700] text-primary mb-[1.6rem]">{card.title}</h3>
            <p className="text-[1.6rem] leading-[1.7] text-gray-700 break-keep">{card.description}</p>
          </Card>
        </motion.div>
      ))}
    </motion.div>
  );
};

export default InsurancePolicyCards;
