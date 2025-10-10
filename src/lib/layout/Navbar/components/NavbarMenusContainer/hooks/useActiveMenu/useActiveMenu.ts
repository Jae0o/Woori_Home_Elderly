import { useState } from "react";

const useActiveMenu = () => {
  const [activeMenu, setActiveMenu] = useState<string | null>(null);

  const handleMouseEnter = (menuLabel: string) => {
    setActiveMenu(menuLabel);
  };

  const handleMouseLeave = () => {
    setActiveMenu(null);
  };

  return {
    activeMenu,
    handleMouseEnter,
    handleMouseLeave,
  };
};

export default useActiveMenu;
