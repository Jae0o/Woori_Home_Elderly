import { WooriLogo } from "@lib/assets";

const NavbarBanner = () => {
  return (
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
  );
};

export default NavbarBanner;
