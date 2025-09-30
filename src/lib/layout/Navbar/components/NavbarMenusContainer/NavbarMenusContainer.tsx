import { useState } from "react";

import { MENU_DATA } from "@lib/constants";

import { NavbarDropdown } from "../";

const NavbarMenusContainer = () => {
  const [activeMenu, setActiveMenu] = useState<string | null>(null);

  const handleMouseEnter = (menuLabel: string) => {
    setActiveMenu(menuLabel);
  };

  const handleMouseLeave = () => {
    setActiveMenu(null);
  };

  return (
    <nav className="w-full h-[5rem] border-b-primary border-b-[0.1rem] hidden lg:block">
      <ul className="w-full h-full flex">
        {MENU_DATA.map(menu => (
          <NavbarDropdown
            key={menu.label}
            menu={menu}
            isOpen={activeMenu === menu.label}
            onMouseEnter={() => handleMouseEnter(menu.label)}
            onMouseLeave={handleMouseLeave}
          />
        ))}
      </ul>
    </nav>
  );
};

export default NavbarMenusContainer;
