import { ROUTE_PATH } from "@lib/constants";

import { NavbarMenusItems } from "./components";

const NavbarMenus = () => {
  return (
    <ul className="w-full h-[6rem] flex border-gray border-b-[0.1rem] overflow-x-auto">
      <NavbarMenusItems
        to={ROUTE_PATH.INTRODUCE}
        title="센터 소개"
      />

      <NavbarMenusItems
        to={ROUTE_PATH.SERVICE}
        title="서비스 안내"
      />

      <NavbarMenusItems
        to={ROUTE_PATH.COST_AND_CONTACT}
        title="비용 & 상담신청"
      />
    </ul>
  );
};

export default NavbarMenus;
