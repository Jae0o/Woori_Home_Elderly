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
        "flex-1 basis-0 min-w-[14rem] h-full flex justify-center items-center font-[600] text-[1.6rem] text-black tracking-[0.12rem]",
        isActive && "bg-dark_primary text-white font-[700]",
      )}
    >
      <Link to={to}>{title}</Link>
    </li>
  );
};

export default NavbarMenusItems;
