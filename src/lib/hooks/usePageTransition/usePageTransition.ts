import { useMemo } from "react";

import type { PageTransitionConfig } from "./usePageTransition.type";

/**
 * Custom hook for page transition animations
 * Provides smooth fade and slide animations for route changes
 *
 * @returns {PageTransitionConfig} Animation variants and transition config
 *
 * @example
 * ```tsx
 * const { pageVariants, pageTransition } = usePageTransition();
 *
 * <motion.div
 *   initial="initial"
 *   animate="animate"
 *   exit="exit"
 *   variants={pageVariants}
 *   transition={pageTransition}
 * >
 *   {children}
 * </motion.div>
 * ```
 */
const usePageTransition = (): PageTransitionConfig => {
  const pageVariants = useMemo(
    () => ({
      initial: {
        opacity: 0,
        x: 20,
      },
      animate: {
        opacity: 1,
        x: 0,
      },
      exit: {
        opacity: 0,
        x: -20,
      },
    }),
    [],
  );

  const pageTransition = useMemo(
    () => ({
      duration: 0.3,
      ease: "easeOut" as const,
    }),
    [],
  );

  return { pageVariants, pageTransition };
};

export default usePageTransition;
