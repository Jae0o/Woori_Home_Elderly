import { useScrollAnimation } from "@lib/hooks";

import type { VolunteerSchedule } from "../../hooks";

import { motion } from "motion/react";

interface VolunteerScheduleInfoProps {
  schedule: VolunteerSchedule[];
}

const VolunteerScheduleInfo = ({ schedule }: VolunteerScheduleInfoProps) => {
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
      className="w-full max-w-[100rem] bg-white rounded-[1.2rem] shadow-card p-[3rem] max-mobile:p-[2rem]"
    >
      <ul className="flex flex-col gap-[1.6rem]">
        {schedule.map((item, index) => (
          <li
            key={index}
            className="flex items-start gap-[1.2rem]"
          >
            <span className="w-[0.8rem] h-[0.8rem] rounded-full bg-primary mt-[0.8rem] flex-shrink-0" />
            <div className="flex flex-col gap-[0.4rem] max-mobile:gap-[0.2rem]">
              <span className="text-[1.5rem] font-[600] text-black max-mobile:text-[1.4rem]">{item.label}</span>
              <span className="text-[1.4rem] text-dark_gray break-keep max-mobile:text-[1.3rem]">{item.value}</span>
            </div>
          </li>
        ))}
      </ul>
    </motion.div>
  );
};

export default VolunteerScheduleInfo;
