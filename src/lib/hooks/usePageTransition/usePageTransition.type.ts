import type { Transition, Variant, Variants } from "motion/react";

export interface PageTransitionVariants extends Variants {
  initial: Variant;
  animate: Variant;
  exit: Variant;
  [key: string]: Variant;
}

export interface PageTransitionConfig {
  pageVariants: PageTransitionVariants;
  pageTransition: Transition;
}

export type NavigationDirection = "forward" | "back";
