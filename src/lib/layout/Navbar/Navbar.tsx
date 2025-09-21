import { WooriLogo } from "@lib/assets";

// import { CallIcon, FaxIcon } from "@lib/components";
// import { COMPANY_INFO } from "@lib/constants";

import { NavbarMenus } from "./components";

// import { twMerge } from "tailwind-merge";

const Navbar = () => {
  return (
    <header className="w-full flex flex-col">
      <div className="w-full h-[8rem] px-[2rem] flex items-center border-b-[0.1rem] border-b-dark_primary">
        <div className="h-[8rem] flex items-center select-none pointer-events-none">
          <img
            className="w-[8rem] h-[8rem] object-contain"
            src={WooriLogo}
            alt=" banner"
          />

          <span className="flex flex-col font-bold">
            <p className="text-primary text-[2.2rem]">우리</p>
            <p className="text-[1.6rem]">재가노인복지센터</p>
          </span>
        </div>

        {/* <span
          className={twMerge(
            "grow-1 h-full px-[4rem] flex flex-col justify-center items-end font-[500] text-[1.6rem] text-black",
            "max-mobile:hidden",
          )}
        >
          <p className="flex items-center gap-[0.6rem]">
            <CallIcon size="2rem" /> {COMPANY_INFO.TEL}
          </p>
          <p className="flex items-center gap-[0.6rem]">
            <FaxIcon size="2rem" /> {COMPANY_INFO.FAX}
          </p>
        </span> */}
      </div>

      <NavbarMenus />
    </header>
  );
};

export default Navbar;
