import { useMemo, useRef } from "react";

import type { ProcessResult, ProcessStepData } from "../../hooks";

import { type Variants, motion, useInView } from "motion/react";

interface GradeProcessTimelineProps {
  steps: ProcessStepData[];
  result: ProcessResult;
}

const GradeProcessTimeline = ({ steps, result }: GradeProcessTimelineProps) => {
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
      className="w-full max-w-[100rem]"
    >
      {/* 타임라인 + 콘텐츠 */}
      <div className="relative pl-[4rem]">
        {/* 세로 연결선 */}
        <div className="absolute left-[1.2rem] top-[1.5rem] bottom-[8rem] w-[0.2rem] bg-primary/30" />

        {steps.map((step, index) => {
          const isLastStep = index === steps.length - 1;
          const isIntermediate = step.isIntermediate;

          return (
            <motion.div
              key={index}
              variants={variants}
              initial="hidden"
              animate={animate}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="relative mb-[1.5rem]"
            >
              {/* 원형 마커 (중간 노드가 아닐 때만) */}
              {!isIntermediate && (
                <div className="absolute left-[-4rem] top-[1.5rem] w-[2.4rem] h-[2.4rem] bg-primary rounded-full border-[0.4rem] border-white shadow-md z-10" />
              )}

              {/* 콘텐츠 박스 */}
              <div className="flex items-center gap-[2rem]">
                <div className="flex-1 p-[2rem] rounded-[0.8rem] bg-primary/10">
                  {step.step && <span className="text-[1.4rem] font-[600] text-primary">{step.step}</span>}
                  <p
                    className={`text-[1.6rem] font-[500] text-black whitespace-pre-line break-keep ${step.step ? "mt-[0.5rem]" : ""}`}
                  >
                    {step.title}
                  </p>
                </div>

                {/* 정보 라벨 (방문조사, 등급판정) */}
                {step.badge && (
                  <div className="px-[2rem] py-[1rem] bg-primary text-white rounded-full text-[1.4rem] font-[600] whitespace-nowrap">
                    {step.badge}
                  </div>
                )}
              </div>

              {/* 다이아몬드 마커 (스텝 간 연결) */}
              {!isLastStep && (
                <div className="flex justify-center my-[1rem]">
                  <div className="w-[1rem] h-[1rem] bg-primary/50 rotate-45" />
                </div>
              )}
            </motion.div>
          );
        })}

        {/* 최종 결과 분기 */}
        <motion.div
          variants={variants}
          initial="hidden"
          animate={animate}
          transition={{ duration: 0.5, delay: steps.length * 0.1 }}
          className="flex gap-[2rem] justify-center mt-[2rem] ml-[-4rem]"
        >
          <div className="px-[4rem] py-[1.5rem] bg-white border-[0.2rem] border-primary rounded-full">
            <span className="text-[1.6rem] font-[600] text-primary">{result.left}</span>
          </div>
          <div className="px-[4rem] py-[1.5rem] bg-white border-[0.2rem] border-primary rounded-full">
            <span className="text-[1.6rem] font-[600] text-primary">{result.right}</span>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default GradeProcessTimeline;
