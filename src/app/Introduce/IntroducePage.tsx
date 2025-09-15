import { useState } from "react";

import { IntroduceImage } from "@lib/assets";
import { Footer, LoadingSpinner } from "@lib/components";

import { Introduce } from "./components";

import { motion } from "motion/react";

const IntroducePage = () => {
  const [isLoading, setIsLoading] = useState(true);

  if (isLoading) {
    return (
      <section className="w-full h-full flex flex-col items-center justify-center">
        <div className="w-full grow-1 flex items-center justify-center">
          <LoadingSpinner size="6rem" />
        </div>

        <Footer />
        <img
          className="hidden"
          src={IntroduceImage}
          alt="introduce"
          onLoad={() => setIsLoading(false)}
        />
      </section>
    );
  }

  return (
    <section className="w-full flex flex-col">
      <div className="w-full p-[2rem] py-[10rem] flex flex-col items-center">
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

      <div className="w-full p-[2rem] py-[10rem] flex flex-col items-center"></div>

      <Footer />
    </section>
  );
};

export default IntroducePage;
