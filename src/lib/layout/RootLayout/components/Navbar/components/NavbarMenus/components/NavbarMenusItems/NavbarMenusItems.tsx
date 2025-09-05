import { useMemo } from "react";
import { Link, useLocation } from "react-router";

import type { NavbarMenusItemsProps } from "./NavbarMenusItems.type";

import { twMerge } from "tailwind-merge";

const NavbarMenusItems = ({ to, title }: NavbarMenusItemsProps) => {
  const { pathname } = useLocation();

  const isActive = useMemo(() => pathname === to, [pathname, to]);

  return (
    <li
      className={twMerge(
        "grow-1 h-full flex justify-center items-center font-[600] text-[1.6rem] text-black tracking-[0.12rem]",
        "transition-normal",
        isActive && "bg-gray text-white font-[700]",
      )}
    >
      <Link to={to}>{title}</Link>
    </li>
  );
};

export default NavbarMenusItems;
