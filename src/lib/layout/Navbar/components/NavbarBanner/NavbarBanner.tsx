import { WooriLogo } from "@lib/assets";

import { Link } from "react-router";

const NavbarBanner = () => {
  return (
    <Link
      to="/"
      className="h-[8rem] flex items-center select-none cursor-pointer"
    >
      <img
        className="w-[8rem] h-[8rem] object-contain"
        src={WooriLogo}
        alt="우리재가노인복지센터 로고"
      />

      <span className="h-[8rem] pb-[1rem] flex flex-col justify-center font-bold">
        <p className="text-primary text-[2.2rem]">우리</p>
        <p className="text-[1.6rem] leading-[1.6rem]">재가노인복지센터</p>
      </span>
    </Link>
  );
};

export default NavbarBanner;
