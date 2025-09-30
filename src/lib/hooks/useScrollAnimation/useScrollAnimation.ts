import { useEffect, useRef, useState } from "react";

import type { UseScrollAnimationOptions, UseScrollAnimationReturn } from "./useScrollAnimation.type";

/**
 * Custom hook for scroll-based animations using Intersection Observer
 * Triggers animations when element is visible in viewport
 *
 * @param {UseScrollAnimationOptions} options - Animation configuration
 * @param {AnimationType} options.type - Type of animation (fade, slide, scale, stagger)
 * @param {number} options.threshold - Intersection threshold (0-1), default: 0.2
 * @param {number} options.staggerDelay - Delay for stagger animations, default: 0.1
 * @returns {UseScrollAnimationReturn} Ref, variants, transition, and visibility state
 *
 * @example
 * ```tsx
 * const { ref, variants, transition, isInView } = useScrollAnimation({
 *   type: 'fade',
 *   threshold: 0.2
 * });
 *
 * <motion.div
 *   ref={ref}
 *   initial="hidden"
 *   animate={isInView ? "visible" : "hidden"}
 *   variants={variants}
 *   transition={transition}
 * >
 *   Content
 * </motion.div>
 * ```
 */
const useScrollAnimation = (options: UseScrollAnimationOptions = {}): UseScrollAnimationReturn => {
  const { type = "fade", threshold = 0.2, staggerDelay = 0.1 } = options;
  const ref = useRef<HTMLElement>(null);
  const [isInView, setIsInView] = useState(false);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true);
        }
      },
      {
        threshold,
        rootMargin: "0px",
      },
    );

    observer.observe(element);

    return () => {
      observer.disconnect();
    };
  }, [threshold]);

  const getVariants = () => {
    switch (type) {
      case "fade":
        return {
          hidden: { opacity: 0 },
          visible: { opacity: 1 },
        };
      case "slide":
        return {
          hidden: { opacity: 0, y: 30 },
          visible: { opacity: 1, y: 0 },
        };
      case "scale":
        return {
          hidden: { opacity: 0, scale: 0.9 },
          visible: { opacity: 1, scale: 1 },
        };
      case "stagger":
        return {
          hidden: { opacity: 0, y: 20 },
          visible: { opacity: 1, y: 0 },
        };
      default:
        return {
          hidden: { opacity: 0 },
          visible: { opacity: 1 },
        };
    }
  };

  const getTransition = () => {
    const baseTransition = {
      duration: 0.5,
      ease: "easeOut" as const,
    };

    if (type === "stagger") {
      return {
        ...baseTransition,
        staggerChildren: staggerDelay,
      };
    }

    return baseTransition;
  };

  return {
    ref,
    variants: getVariants(),
    transition: getTransition(),
    isInView,
  };
};

export default useScrollAnimation;
