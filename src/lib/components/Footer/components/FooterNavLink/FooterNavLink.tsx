import { Link } from "react-router";

import type { FooterNavLinkProps } from "./FooterNavLink.type";

import { twMerge } from "tailwind-merge";

const FooterNavLink = ({ to, label, className }: FooterNavLinkProps) => {
  const linkHoverStyle = "transition-colors duration-300 hover:text-black focus:text-primary focus:outline-none";

  return (
    <li>
      <Link
        to={to}
        className={twMerge("text-[1.4rem] opacity-80 max-mobile:text-[1.3rem]", linkHoverStyle, className)}
      >
        {label}
      </Link>
    </li>
  );
};

export default FooterNavLink;
