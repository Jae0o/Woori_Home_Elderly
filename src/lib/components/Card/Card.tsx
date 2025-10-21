import type { CardProps, CardVariant } from "./Card.type";

import { twMerge } from "tailwind-merge";

const VARIANT_STYLES: Record<CardVariant, string> = {
  default: "p-[3rem] bg-white rounded-[1.2rem] shadow-md hover:shadow-lg transition-shadow border border-gray-200",
  gradient:
    "p-[3rem] bg-gradient-to-br from-white to-gray-50 rounded-[1.2rem] shadow-md hover:shadow-lg transition-shadow border-[0.1rem] border-gray-200",
  outline: "p-[3rem] bg-transparent rounded-[1.2rem] border-2 border-gray-300 hover:border-primary transition-colors",
};

const Card = ({ children, variant = "default", className }: CardProps) => {
  return <div className={twMerge(VARIANT_STYLES[variant], className)}>{children}</div>;
};

export default Card;
