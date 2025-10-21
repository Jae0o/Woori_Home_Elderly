import type { ReactNode } from "react";

export type CardVariant = "default" | "gradient" | "outline";

export interface CardProps {
  children: ReactNode;
  variant?: CardVariant;
  className?: string;
}
