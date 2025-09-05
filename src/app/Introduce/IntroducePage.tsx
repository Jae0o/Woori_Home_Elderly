import { useState } from "react";

import { IntroduceImage } from "@lib/assets";
import { Footer } from "@lib/components";

import { Introduce } from "./components";

const IntroducePage = () => {
  const [isLoading, setIsLoading] = useState(true);

  if (isLoading) {
    return (
      <section className="w-full h-full flex flex-col items-center justify-center">
        <div className="w-full grow-1">dasfsdf </div>

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
        <img
          className="w-full max-w-[100rem]"
          src={IntroduceImage}
          alt="introduce"
        />

        <Introduce />
      </div>

      <Footer />
    </section>
  );
};

export default IntroducePage;
