import { useMemo } from "react";
import { Link, useLocation } from "react-router";

import type { NavbarMenusItemsProps } from "./NavbarMenusItems.type";

import { motion } from "motion/react";
import { twMerge } from "tailwind-merge";

const NavbarMenusItems = ({ to, title }: NavbarMenusItemsProps) => {
  const { pathname } = useLocation();

  const isActive = useMemo(() => pathname === to, [pathname, to]);

  return (
    <motion.li
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      transition={{ duration: 0.2 }}
      className={twMerge(
        "flex-1 basis-0 min-w-[14rem] h-full flex justify-center items-center font-[600] text-[1.6rem] text-black tracking-[0.12rem] transition-colors duration-300",
        isActive && "bg-primary text-white font-[700]",
        !isActive && "hover:bg-primary/10",
      )}
    >
      <Link
        to={to}
        className="w-full h-full flex items-center justify-center focus:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-inset"
        aria-current={isActive ? "page" : undefined}
      >
        {title}
      </Link>
    </motion.li>
  );
};

export default NavbarMenusItems;
