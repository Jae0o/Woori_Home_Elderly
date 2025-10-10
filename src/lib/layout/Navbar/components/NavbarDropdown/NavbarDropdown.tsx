import { Link, useLocation } from "react-router";

import type { MenuItem } from "@lib/constants";

import { AnimatePresence, motion } from "motion/react";
import { twMerge } from "tailwind-merge";

interface NavbarDropdownProps {
  menu: MenuItem;
  isOpen: boolean;
  onMouseEnter: () => void;
  onMouseLeave: () => void;
}

const NavbarDropdown = ({ menu, isOpen, onMouseEnter, onMouseLeave }: NavbarDropdownProps) => {
  const { pathname } = useLocation();

  const isActive = menu.subItems.some(subItem => pathname === subItem.path);

  return (
    <li
      className="relative flex-1 basis-0 min-w-[14rem] h-full"
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
    >
      <Link
        to={menu.mainPath}
        className={twMerge(
          "w-full h-full flex justify-center items-center font-[600] text-[1.6rem] text-black tracking-[0.12rem] transition-all duration-[var(--transition-normal)]",
          isActive && "bg-primary text-white font-[700]",
          !isActive && "hover:bg-primary/20",
        )}
      >
        {menu.label}
      </Link>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 1 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.3 }}
            className="absolute top-full left-0 w-full bg-white shadow-[var(--shadow-normal)] rounded-[0.4rem] overflow-hidden z-[var(--z-index-modal)]"
          >
            <ul className="flex flex-col">
              {menu.subItems.map(subItem => {
                const isSubItemActive = pathname === subItem.path;

                return (
                  <li
                    key={subItem.path}
                    className="w-full"
                  >
                    <Link
                      to={subItem.path}
                      className={twMerge(
                        "w-full h-[4rem] flex items-center justify-center text-[1.4rem] font-[500] text-black transition-all duration-[var(--transition-normal)] hover:bg-primary/20",
                        isSubItemActive && "bg-primary text-white font-[600] hover:bg-primary",
                      )}
                    >
                      {subItem.label}
                    </Link>
                  </li>
                );
              })}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </li>
  );
};

export default NavbarDropdown;
