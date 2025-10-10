import { useMobileMenu } from "@lib/hooks";

import { MobileMenu, NavbarBanner, NavbarMenusContainer } from "./components";

const Navbar = () => {
  const { isOpen, toggle, close } = useMobileMenu();

  return (
    <header
      className="w-full flex flex-col"
      role="banner"
    >
      <div className="w-full h-[8rem] px-[2rem] flex items-center justify-between border-b-[0.1rem] border-b-primary">
        <NavbarBanner />

        <button
          onClick={toggle}
          className="w-[4rem] h-[4rem] flex flex-col items-center justify-center gap-[0.6rem] lg:hidden focus:outline-none focus-visible:ring-2 focus-visible:ring-primary transition-transform hover:scale-105 active:scale-95 cursor-pointer"
          aria-label={isOpen ? "메뉴 닫기" : "메뉴 열기"}
          aria-expanded={isOpen}
          aria-controls="mobile-menu"
        >
          <span
            className="w-[2.8rem] h-[0.3rem] bg-black rounded-full transition-transform duration-300"
            aria-hidden="true"
          />
          <span
            className="w-[2.8rem] h-[0.3rem] bg-black rounded-full transition-opacity duration-300"
            aria-hidden="true"
          />
          <span
            className="w-[2.8rem] h-[0.3rem] bg-black rounded-full transition-transform duration-300"
            aria-hidden="true"
          />
        </button>
      </div>

      <NavbarMenusContainer />

      <MobileMenu
        isOpen={isOpen}
        onClose={close}
      />
    </header>
  );
};

export default Navbar;
