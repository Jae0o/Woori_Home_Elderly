import type { Transition, Variant, Variants } from "motion/react";

export type AnimationType = "fade" | "slide" | "scale" | "stagger";

export interface ScrollAnimationVariants extends Variants {
  hidden: Variant;
  visible: Variant;
  [key: string]: Variant;
}

export interface UseScrollAnimationOptions {
  type?: AnimationType;
  threshold?: number;
  staggerDelay?: number;
}

export interface UseScrollAnimationReturn {
  ref: React.RefObject<HTMLElement | null>;
  variants: ScrollAnimationVariants;
  transition: Transition;
  isInView: boolean;
}
