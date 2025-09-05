import { IntroduceImage } from "@lib/assets";

import { Introduce } from "./components";

const IntroducePage = () => {
  return (
    <section className="w-full h-full p-[2rem] py-[10rem] flex flex-col items-center">
      <img
        className="w-full max-w-[100rem]"
        src={IntroduceImage}
        alt="introduce"
      />

      <Introduce />
    </section>
  );
};

export default IntroducePage;
