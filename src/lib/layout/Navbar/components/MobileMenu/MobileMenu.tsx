import { Link, useLocation } from "react-router";

import { MENU_DATA } from "@lib/constants";
import { useMobileMenu } from "@lib/hooks";

import { AnimatePresence, motion } from "motion/react";
import { twMerge } from "tailwind-merge";

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
}

const MobileMenu = ({ isOpen, onClose }: MobileMenuProps) => {
  const { pathname } = useLocation();
  const { activeSubmenu, toggleSubmenu } = useMobileMenu();

  const handleLinkClick = () => {
    onClose();
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 bg-black bg-opacity-50 z-[calc(var(--z-index-modal)-1)] lg:hidden"
            onClick={onClose}
          />

          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="fixed top-0 right-0 w-[80%] max-w-[32rem] h-full bg-white shadow-[var(--shadow-normal)] z-[var(--z-index-modal)] overflow-y-auto lg:hidden"
          >
            <div className="w-full h-full flex flex-col">
              <div className="w-full h-[6rem] px-[2rem] flex items-center justify-between border-b-[0.1rem] border-b-gray">
                <h2 className="text-[1.8rem] font-[700] text-black">메뉴</h2>
                <button
                  onClick={onClose}
                  className="w-[3.6rem] h-[3.6rem] flex items-center justify-center text-[2.4rem] text-black hover:text-primary transition-colors duration-[var(--transition-normal)]"
                  aria-label="메뉴 닫기"
                >
                  ✕
                </button>
              </div>

              <nav className="flex-1 py-[1rem]">
                <ul className="w-full flex flex-col">
                  {MENU_DATA.map(menu => {
                    const isActive = menu.subItems.some(subItem => pathname === subItem.path);
                    const isSubmenuOpen = activeSubmenu === menu.label;

                    return (
                      <li
                        key={menu.label}
                        className="w-full border-b-[0.1rem] border-b-gray"
                      >
                        <button
                          onClick={() => toggleSubmenu(menu.label)}
                          className={twMerge(
                            "w-full h-[5.6rem] px-[2rem] flex items-center justify-between text-[1.6rem] font-[600] text-black transition-all duration-[var(--transition-normal)]",
                            isActive && "bg-primary text-white",
                          )}
                        >
                          <span>{menu.label}</span>
                          <motion.span
                            animate={{ rotate: isSubmenuOpen ? 180 : 0 }}
                            transition={{ duration: 0.3 }}
                            className="text-[2rem]"
                          >
                            ▼
                          </motion.span>
                        </button>

                        <AnimatePresence>
                          {isSubmenuOpen && (
                            <motion.ul
                              initial={{ height: 0, opacity: 0 }}
                              animate={{ height: "auto", opacity: 1 }}
                              exit={{ height: 0, opacity: 0 }}
                              transition={{ duration: 0.3 }}
                              className="w-full bg-light_white overflow-hidden"
                            >
                              {menu.subItems.map(subItem => {
                                const isSubItemActive = pathname === subItem.path;

                                return (
                                  <li
                                    key={subItem.path}
                                    className="w-full"
                                  >
                                    <Link
                                      to={subItem.path}
                                      onClick={handleLinkClick}
                                      className={twMerge(
                                        "w-full h-[4.8rem] px-[3rem] flex items-center text-[1.4rem] font-[500] text-black transition-all duration-[var(--transition-normal)]",
                                        isSubItemActive && "bg-primary text-white font-[600]",
                                        !isSubItemActive && "hover:bg-primary/20",
                                      )}
                                    >
                                      {subItem.label}
                                    </Link>
                                  </li>
                                );
                              })}
                            </motion.ul>
                          )}
                        </AnimatePresence>
                      </li>
                    );
                  })}
                </ul>
              </nav>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};

export default MobileMenu;
