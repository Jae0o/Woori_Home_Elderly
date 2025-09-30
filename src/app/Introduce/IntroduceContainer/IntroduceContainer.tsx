import { Footer } from "@lib/components";

import type { IntroduceContainerProps } from "./IntroduceContainer.type";
import { useIntroduceData } from "./hooks";

const IntroduceContainer = ({ children }: IntroduceContainerProps) => {
  const { error } = useIntroduceData();

  if (error) {
    return (
      <section className="min-h-screen w-full flex flex-col">
        <div className="flex-1 w-full flex items-center justify-center p-[2rem]">
          <p className="text-[1.8rem] text-red-500">데이터를 불러오는 중 오류가 발생했습니다.</p>
        </div>
        <Footer />
      </section>
    );
  }

  return (
    <section className="min-h-screen w-full flex flex-col">
      <div className="flex-1 w-full flex flex-col items-center">{children}</div>
      <Footer />
    </section>
  );
};

export default IntroduceContainer;
