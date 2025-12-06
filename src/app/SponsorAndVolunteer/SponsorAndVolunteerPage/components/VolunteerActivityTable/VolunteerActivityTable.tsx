import { Card } from "@lib/components";
import { useScrollAnimation } from "@lib/hooks";

import type { VolunteerActivity } from "../../hooks";

import { motion } from "motion/react";

interface VolunteerActivityTableProps {
  activities: VolunteerActivity[];
}

const VolunteerActivityTable = ({ activities }: VolunteerActivityTableProps) => {
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
      className="w-full max-w-[100rem]"
    >
      {/* 데스크탑 테이블 */}
      <div className="hidden mobile:block">
        <Card
          variant="default"
          className="p-0 overflow-hidden"
        >
          <table className="w-full border-collapse">
            <thead>
              <tr className="bg-primary text-white">
                <th className="py-[1.6rem] px-[2rem] text-[1.5rem] font-[600] text-center w-[20rem] border-r border-white/20">
                  봉사분야
                </th>
                <th className="py-[1.6rem] px-[2rem] text-[1.5rem] font-[600] text-center">봉사내용</th>
              </tr>
            </thead>
            <tbody>
              {activities.map((activity, index) => (
                <tr
                  key={index}
                  className="border-b border-gray last:border-b-0"
                >
                  <td className="py-[1.6rem] px-[2rem] text-[1.4rem] font-[500] text-black text-center bg-bg_gray border-r border-gray">
                    {activity.category}
                  </td>
                  <td className="py-[1.6rem] px-[2rem] text-[1.4rem] text-dark_gray text-left break-keep">
                    {activity.content}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </Card>
      </div>

      {/* 모바일 카드 레이아웃 */}
      <div className="mobile:hidden flex flex-col gap-[1.2rem]">
        {activities.map((activity, index) => (
          <Card
            key={index}
            variant="default"
            className="p-0 overflow-hidden"
          >
            <div className="bg-primary text-white py-[1.2rem] px-[1.6rem]">
              <p className="text-[1.4rem] font-[600]">{activity.category}</p>
            </div>
            <div className="p-[1.6rem]">
              <p className="text-[1.3rem] text-dark_gray break-keep">{activity.content}</p>
            </div>
          </Card>
        ))}
      </div>
    </motion.div>
  );
};

export default VolunteerActivityTable;
