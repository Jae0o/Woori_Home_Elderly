import type { PageHeroProps } from "./PageHero.type";

import { motion } from "motion/react";

const PageHero = ({ title, subtitle, backgroundImage }: PageHeroProps) => {
  return (
    <section className="w-full flex flex-col items-center justify-center py-[4rem] px-[2rem]">
      {backgroundImage && (
        <div className="w-[80%] max-[1000px]:w-full relative rounded-[1.6rem] overflow-hidden">
          <img
            src={backgroundImage}
            alt="Hero background"
            className="w-full h-auto object-cover"
            style={{ filter: "brightness(0.7)" }}
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/40 to-black/50" />

          <div className="absolute inset-0 flex flex-col items-center justify-center gap-[2rem] px-[2rem] text-center">
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-[4.8rem] max-mobile:text-[3.6rem] font-[700] text-white drop-shadow-[0_2px_8px_rgba(0,0,0,0.8)] break-keep"
            >
              {title}
            </motion.h1>

            {subtitle && (
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="text-[2rem] max-mobile:text-[1.6rem] font-[500] text-white drop-shadow-[0_2px_8px_rgba(0,0,0,0.8)] break-keep"
              >
                {subtitle}
              </motion.p>
            )}
          </div>
        </div>
      )}

      {!backgroundImage && (
        <div className="w-[80%] max-[1000px]:w-full relative rounded-[1.6rem] overflow-hidden bg-gradient-to-br from-primary/20 via-primary/10 to-transparent p-[6rem]">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-[4.8rem] max-mobile:text-[3.6rem] font-[700] text-primary break-keep text-center"
          >
            {title}
          </motion.h1>

          {subtitle && (
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-[2rem] max-mobile:text-[1.6rem] font-[500] text-black break-keep text-center mt-[2rem]"
            >
              {subtitle}
            </motion.p>
          )}
        </div>
      )}
    </section>
  );
};

export default PageHero;
