import type { ReactNode } from "react";

export interface ContentSectionProps {
  title?: string;
  children: ReactNode;
  className?: string;
  maxWidth?: string;
}
