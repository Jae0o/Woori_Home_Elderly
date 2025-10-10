import { MENU_DATA } from "@lib/constants";

import { NavbarDropdown } from "../";
import { useActiveMenu } from "./hooks";

const NavbarMenusContainer = () => {
  const { activeMenu, handleMouseEnter, handleMouseLeave } = useActiveMenu();

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
