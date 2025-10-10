import { IntroduceImage } from "@lib/assets";
import { ArticleTitle, Footer, LoadingSpinner } from "@lib/components";
import { useImagePreload, usePageTransition } from "@lib/hooks";

import { Directions, Introduce } from "./components";

import { motion } from "motion/react";

const IntroducePage = () => {
  const { isLoaded } = useImagePreload(IntroduceImage);
  const { pageVariants, pageTransition } = usePageTransition();

  if (!isLoaded) {
    return (
      <section className="min-h-screen w-full flex flex-col">
        <div className="flex-1 w-full flex items-center justify-center">
          <LoadingSpinner size="6rem" />
        </div>

        <Footer />
      </section>
    );
  }

  return (
    <motion.section
      className="w-full flex flex-col"
      initial="initial"
      animate="animate"
      exit="exit"
      variants={pageVariants}
      transition={pageTransition}
    >
      <div className="w-full p-[2rem] py-[10rem] flex flex-col items-center">
        <ArticleTitle
          title="센터 소개"
          iconClassName="fill-primary"
        />

        <motion.img
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.2 }}
          className="w-full max-w-[100rem]"
          src={IntroduceImage}
          alt="introduce"
        />

        <Introduce />
      </div>

      <div className="w-full p-[2rem] pb-[20rem] flex flex-col items-center">
        <Directions />
      </div>

      <Footer />
    </motion.section>
  );
};

export default IntroducePage;
