import { useMemo, useRef } from "react";

import type { HistoryTimelineProps } from "./HistoryTimeline.type";

import { type Variants, motion, useInView } from "motion/react";

const HistoryTimeline = ({ history }: HistoryTimelineProps) => {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true });

  const variants: Variants = {
    hidden: { opacity: 0, x: -20 },
    visible: { opacity: 1, x: 0 },
  };

  const animate = useMemo(() => (isInView ? "visible" : "hidden"), [isInView]);

  return (
    <div
      ref={ref}
      className="w-full max-w-[80rem] px-[2rem]"
    >
      <div className="relative">
        <div className="absolute left-[2rem] top-0 bottom-0 w-[0.2rem] bg-primary/30" />

        <div className="flex flex-col gap-[3rem]">
          {history.map((item, index) => (
            <motion.div
              key={`${item.year}-${item.month}`}
              variants={variants}
              initial="hidden"
              animate={animate}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="relative flex items-start gap-[2rem] pl-[5rem]"
            >
              <div className="absolute left-[0.8rem] top-[0.8rem] w-[2.4rem] h-[2.4rem] bg-primary rounded-full border-[0.4rem] border-white shadow-md" />

              <div className="flex-1 bg-white p-[2.4rem] rounded-[1rem] shadow-md">
                <div className="flex items-baseline gap-[1rem] mb-[1rem]">
                  <span className="text-[2.4rem] font-[700] text-primary">{item.year}</span>
                  <span className="text-[1.8rem] font-[600] text-gray-600">{item.month}월</span>
                </div>
                <p className="text-[1.6rem] text-gray-800 break-keep">{item.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default HistoryTimeline;
