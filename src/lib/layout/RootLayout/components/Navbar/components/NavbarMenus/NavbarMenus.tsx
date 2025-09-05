import { Link } from "react-router";

import { NavbarMenusItems } from "./components";

const menuItemStyle = "grow-1 h-full flex justify-center items-center font-[600] text-[1.4rem] text-black";

const NavbarMenus = () => {
  return (
    <ul className="w-full h-[6rem] flex border-gray border-b-[0.1rem]">
      <NavbarMenusItems
        to="/"
        title="회사소개"
      />

      <li className={menuItemStyle}>
        <Link to="/">프로그램 소개</Link>
      </li>

      <li className={menuItemStyle}>
        <Link to="/">오시는 길</Link>
      </li>
    </ul>
  );
};

export default NavbarMenus;
