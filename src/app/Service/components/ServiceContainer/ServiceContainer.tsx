import type { PropsWithChildren } from "react";

import { Footer } from "@lib/components";

const ServiceContainer = ({ children }: PropsWithChildren) => {
  return (
    <section className="min-h-screen w-full flex flex-col">
      <div className="flex-1 w-full flex flex-col items-center">{children}</div>
      <Footer />
    </section>
  );
};

export default ServiceContainer;
