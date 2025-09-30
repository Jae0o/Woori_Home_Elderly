import { useMemo, useRef } from "react";

import type { CoreValuesGridProps } from "./CoreValuesGrid.type";

import { type Variants, motion, useInView } from "motion/react";

const CoreValuesGrid = ({ coreValues }: CoreValuesGridProps) => {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true });

  const variants: Variants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0 },
  };

  const animate = useMemo(() => (isInView ? "visible" : "hidden"), [isInView]);

  return (
    <div
      ref={ref}
      className="w-full max-w-[100rem] grid grid-cols-1 md:grid-cols-2 gap-[2.4rem] px-[2rem]"
    >
      {coreValues.map((value, index) => (
        <motion.div
          key={value.title}
          variants={variants}
          initial="hidden"
          animate={animate}
          transition={{ duration: 0.5, delay: index * 0.1 }}
          className="flex flex-col p-[3rem] bg-gradient-to-br from-white to-gray-50 rounded-[1.2rem] shadow-md hover:shadow-lg transition-shadow border-[0.1rem] border-gray-200"
        >
          <h4 className="text-[2.2rem] font-[700] text-primary mb-[1.6rem]">{value.title}</h4>
          <p className="text-[1.6rem] leading-[1.7] text-gray-700 break-keep">{value.description}</p>
        </motion.div>
      ))}
    </div>
  );
};

export default CoreValuesGrid;
