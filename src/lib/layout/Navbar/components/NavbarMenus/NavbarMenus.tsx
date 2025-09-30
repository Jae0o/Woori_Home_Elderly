import { NavbarMenusItems } from "./components";

const NavbarMenus = () => {
  return (
    <nav aria-label="주요 메뉴">
      <ul className="w-full h-[5rem] flex border-b-primary border-b-[0.1rem] overflow-x-auto">
        <NavbarMenusItems
          to="/introduce"
          title="센터 소개"
        />

        <NavbarMenusItems
          to="/service"
          title="서비스 안내"
        />

        <NavbarMenusItems
          to="/cost-and-contact"
          title="비용 & 상담신청"
        />

        <NavbarMenusItems
          to="/sponsor-and-volunteer"
          title="후원 & 자원봉사"
        />
      </ul>
    </nav>
  );
};

export default NavbarMenus;
