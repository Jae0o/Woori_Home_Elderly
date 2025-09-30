import { useMemo, useRef } from "react";

import type { CEOGreetingProps } from "./CEOGreeting.type";

import { type Variants, motion, useInView } from "motion/react";

const CEOGreeting = ({ ceoName, messages, closingMessage }: CEOGreetingProps) => {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true });

  const variants: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  const animate = useMemo(() => (isInView ? "visible" : "hidden"), [isInView]);

  return (
    <article
      ref={ref}
      className="w-full max-w-[80rem] py-[6rem] flex flex-col items-center gap-[3.2rem] break-keep text-center"
    >
      {messages.map((message, index) => (
        <motion.p
          key={index}
          variants={variants}
          initial="hidden"
          animate={animate}
          transition={{ duration: 0.5, delay: index * 0.1 }}
          className="text-[1.8rem] leading-[1.8] font-[500] text-gray-800"
        >
          {message}
        </motion.p>
      ))}

      <motion.p
        variants={variants}
        initial="hidden"
        animate={animate}
        transition={{ duration: 0.5, delay: messages.length * 0.1 }}
        className="text-[2.2rem] font-[700] text-primary mt-[2rem]"
      >
        "{closingMessage}"
      </motion.p>

      <motion.div
        variants={variants}
        initial="hidden"
        animate={animate}
        transition={{ duration: 0.5, delay: (messages.length + 1) * 0.1 }}
        className="flex flex-col gap-[0.4rem] items-center mt-[3rem] text-[2rem]"
      >
        <p>우리재가노인복지센터</p>
        <p>
          센터장 <strong className="tracking-[0.2em] font-[700]">{ceoName}</strong> 드림
        </p>
      </motion.div>
    </article>
  );
};

export default CEOGreeting;
