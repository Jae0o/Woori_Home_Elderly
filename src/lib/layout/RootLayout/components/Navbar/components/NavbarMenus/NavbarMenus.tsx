import { ROUTE_PATH } from "@lib/constants";

import { NavbarMenusItems } from "./components";

const NavbarMenus = () => {
  return (
    <ul className="w-full h-[6rem] flex border-gray border-b-[0.1rem]">
      <NavbarMenusItems
        to={ROUTE_PATH.INTRODUCE}
        title="회사소개"
      />

      <NavbarMenusItems
        to={ROUTE_PATH.PROGRAM}
        title="프로그램 소개"
      />

      <NavbarMenusItems
        to={ROUTE_PATH.MAP}
        title="오시는 길"
      />
    </ul>
  );
};

export default NavbarMenus;
