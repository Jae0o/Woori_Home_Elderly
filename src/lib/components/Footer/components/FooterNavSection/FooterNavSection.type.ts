import type { FooterNavItem } from "../../constants";

export interface FooterNavSectionProps {
  title: string;
  ariaLabel: string;
  items: FooterNavItem[];
}
