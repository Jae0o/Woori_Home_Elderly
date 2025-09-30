import { Footer, PrePareModal } from "@lib/components";
import { usePageTransition } from "@lib/hooks";

import { motion } from "motion/react";

const CostAndContactPage = () => {
  const { pageVariants, pageTransition } = usePageTransition();

  return (
    <motion.section
      className="min-h-screen w-full flex flex-col"
      initial="initial"
      animate="animate"
      exit="exit"
      variants={pageVariants}
      transition={pageTransition}
    >
      <div className="flex-1">
        <PrePareModal />
      </div>
      <Footer />
    </motion.section>
  );
};

export default CostAndContactPage;
