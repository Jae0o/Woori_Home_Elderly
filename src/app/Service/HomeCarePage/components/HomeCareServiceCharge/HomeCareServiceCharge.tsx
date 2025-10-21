import { useScrollAnimation } from "@lib/hooks";

import type { HomeCareServiceChargeProps } from "./HomeCareServiceCharge.type";

import { motion } from "motion/react";

const HomeCareServiceCharge = ({ chargeData }: HomeCareServiceChargeProps) => {
  const { ref, variants, transition, isInView } = useScrollAnimation({
    type: "slide",
    threshold: 0.2,
  });

  return (
    <motion.div
      ref={ref as React.RefObject<HTMLDivElement>}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      variants={variants}
      transition={transition}
      className="w-full flex flex-col gap-[1.6rem]"
    >
      <div className="w-full max-mobile:hidden rounded-[0.8rem] overflow-hidden shadow-[0_2px_8px_rgba(0,0,0,0.1)]">
        <table className="w-full">
          <thead>
            <tr className="bg-primary text-white">
              <th className="px-[1.6rem] py-[1.4rem] text-[1.5rem] font-[700] text-center border-r-[0.1rem] border-r-white/20">
                구분
              </th>
              <th className="px-[1.6rem] py-[1.4rem] text-[1.5rem] font-[700] text-center border-r-[0.1rem] border-r-white/20">
                급여(원)
              </th>
              <th className="px-[1.6rem] py-[1.4rem] text-[1.5rem] font-[700] text-center border-r-[0.1rem] border-r-white/20">
                본인부담금(15%)
              </th>
              <th className="px-[1.6rem] py-[1.4rem] text-[1.5rem] font-[700] text-center border-r-[0.1rem] border-r-white/20">
                본인부담금(9%)
              </th>
              <th className="px-[1.6rem] py-[1.4rem] text-[1.5rem] font-[700] text-center">본인부담금(6%)</th>
            </tr>
          </thead>
          <tbody>
            {chargeData.rows.map((row, index) => (
              <tr
                key={index}
                className="bg-white border-b-[0.1rem] border-b-gray-200 last:border-b-0"
              >
                <td className="px-[1.6rem] py-[1.2rem] text-[1.4rem] font-[600] text-center border-r-[0.1rem] border-r-gray-200">
                  {row.duration}
                </td>
                <td className="px-[1.6rem] py-[1.2rem] text-[1.4rem] font-[500] text-center border-r-[0.1rem] border-r-gray-200">
                  {row.benefit}
                </td>
                <td className="px-[1.6rem] py-[1.2rem] text-[1.4rem] font-[500] text-center border-r-[0.1rem] border-r-gray-200">
                  {row.burden15}
                </td>
                <td className="px-[1.6rem] py-[1.2rem] text-[1.4rem] font-[500] text-center border-r-[0.1rem] border-r-gray-200">
                  {row.burden9}
                </td>
                <td className="px-[1.6rem] py-[1.2rem] text-[1.4rem] font-[500] text-center">{row.burden6}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Mobile: Horizontal Scroll Table */}
      <div className="w-full sm:hidden overflow-x-auto rounded-[0.8rem] shadow-[0_2px_8px_rgba(0,0,0,0.1)]">
        <table className="w-full min-w-[64rem]">
          <thead>
            <tr className="bg-primary text-white">
              <th className="px-[1.2rem] py-[1.2rem] text-[1.3rem] font-[700] text-center border-r-[0.1rem] border-r-white/20 whitespace-nowrap">
                구분
              </th>
              <th className="px-[1.2rem] py-[1.2rem] text-[1.3rem] font-[700] text-center border-r-[0.1rem] border-r-white/20 whitespace-nowrap">
                급여(원)
              </th>
              <th className="px-[1.2rem] py-[1.2rem] text-[1.3rem] font-[700] text-center border-r-[0.1rem] border-r-white/20 whitespace-nowrap">
                본인부담금
                <br />
                (15%)
              </th>
              <th className="px-[1.2rem] py-[1.2rem] text-[1.3rem] font-[700] text-center border-r-[0.1rem] border-r-white/20 whitespace-nowrap">
                본인부담금
                <br />
                (9%)
              </th>
              <th className="px-[1.2rem] py-[1.2rem] text-[1.3rem] font-[700] text-center whitespace-nowrap">
                본인부담금
                <br />
                (6%)
              </th>
            </tr>
          </thead>
          <tbody>
            {chargeData.rows.map((row, index) => (
              <tr
                key={index}
                className="bg-white border-b-[0.1rem] border-b-gray-200 last:border-b-0"
              >
                <td className="px-[1.2rem] py-[1rem] text-[1.3rem] font-[600] text-center border-r-[0.1rem] border-r-gray-200 whitespace-nowrap">
                  {row.duration}
                </td>
                <td className="px-[1.2rem] py-[1rem] text-[1.3rem] font-[500] text-center border-r-[0.1rem] border-r-gray-200 whitespace-nowrap">
                  {row.benefit}
                </td>
                <td className="px-[1.2rem] py-[1rem] text-[1.3rem] font-[500] text-center border-r-[0.1rem] border-r-gray-200 whitespace-nowrap">
                  {row.burden15}
                </td>
                <td className="px-[1.2rem] py-[1rem] text-[1.3rem] font-[500] text-center border-r-[0.1rem] border-r-gray-200 whitespace-nowrap">
                  {row.burden9}
                </td>
                <td className="px-[1.2rem] py-[1rem] text-[1.3rem] font-[500] text-center whitespace-nowrap">
                  {row.burden6}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <p className="text-[1.3rem] max-mobile:text-[1.2rem] text-gray-600 leading-[1.6] break-keep mt-[0.8rem]">
        {chargeData.footerNote}
      </p>
    </motion.div>
  );
};

export default HomeCareServiceCharge;
