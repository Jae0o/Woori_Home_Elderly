import type { TransportationGuideProps } from "./TransportationGuide.type";

import { motion } from "motion/react";

const TransportationGuide = ({ transportInfo }: TransportationGuideProps) => {
  return (
    <div className="w-full max-w-[80rem] grid grid-cols-1 md:grid-cols-2 gap-[2rem] px-[2rem]">
      {transportInfo.map((info, index) => (
        <motion.div
          key={info.type}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: index * 0.1 }}
          className="flex flex-col p-[2.4rem] bg-white rounded-[1rem] shadow-md border-[0.1rem] border-gray-200"
        >
          <h4 className="text-[1.8rem] font-[700] text-primary mb-[1.2rem]">{info.type}</h4>
          <p className="text-[1.6rem] text-gray-700 break-keep leading-[1.6]">{info.details}</p>
        </motion.div>
      ))}
    </div>
  );
};

export default TransportationGuide;
