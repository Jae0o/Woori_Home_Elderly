import { NavbarBanner, NavbarMenus } from "./components";

const Navbar = () => {
  return (
    <header className="w-full flex flex-col">
      <div className="w-full h-[8rem] px-[2rem] flex items-center border-b-[0.1rem] border-b-dark_primary">
        <NavbarBanner />
      </div>

      <NavbarMenus />
    </header>
  );
};

export default Navbar;
