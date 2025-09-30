import { useMemo, useRef } from "react";

import type { VisionMissionCardsProps } from "./VisionMissionCards.type";

import { type Variants, motion, useInView } from "motion/react";

const VisionMissionCards = ({ vision, mission }: VisionMissionCardsProps) => {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true });

  const variants: Variants = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: { opacity: 1, scale: 1 },
  };

  const animate = useMemo(() => (isInView ? "visible" : "hidden"), [isInView]);

  return (
    <div
      ref={ref}
      className="w-full max-w-[100rem] grid grid-cols-1 md:grid-cols-2 gap-[3rem] px-[2rem]"
    >
      <motion.div
        variants={variants}
        initial="hidden"
        animate={animate}
        transition={{ duration: 0.5 }}
        className="flex flex-col items-center justify-center p-[4rem] bg-white rounded-[1.6rem] shadow-lg hover:shadow-xl transition-shadow"
      >
        <h3 className="text-[2.4rem] font-[700] text-primary mb-[2rem]">비전</h3>
        <p className="text-[2rem] font-[600] text-center text-gray-800 break-keep">{vision}</p>
      </motion.div>

      <motion.div
        variants={variants}
        initial="hidden"
        animate={animate}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="flex flex-col items-center justify-center p-[4rem] bg-white rounded-[1.6rem] shadow-lg hover:shadow-xl transition-shadow"
      >
        <h3 className="text-[2.4rem] font-[700] text-primary mb-[2rem]">미션</h3>
        <p className="text-[2rem] font-[600] text-center text-gray-800 break-keep">{mission}</p>
      </motion.div>
    </div>
  );
};

export default VisionMissionCards;
