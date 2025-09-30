import { useCallback, useEffect, useRef, useState } from "react";

interface UseDropdownReturn {
  isOpen: boolean;
  toggle: () => void;
  open: () => void;
  close: () => void;
  activeMenu: string | null;
  setActiveMenu: (menuId: string | null) => void;
  dropdownRef: React.RefObject<HTMLDivElement | null>;
}

const useDropdown = (): UseDropdownReturn => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeMenu, setActiveMenu] = useState<string | null>(null);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const toggle = useCallback(() => {
    setIsOpen(prev => !prev);
  }, []);

  const open = useCallback(() => {
    setIsOpen(true);
  }, []);

  const close = useCallback(() => {
    setIsOpen(false);
    setActiveMenu(null);
  }, []);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        close();
      }
    };

    const handleEscapeKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        close();
      }
    };

    if (isOpen) {
      document.addEventListener("mousedown", handleClickOutside);
      document.addEventListener("keydown", handleEscapeKey);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      document.removeEventListener("keydown", handleEscapeKey);
    };
  }, [isOpen, close]);

  return {
    isOpen,
    toggle,
    open,
    close,
    activeMenu,
    setActiveMenu,
    dropdownRef,
  };
};

export default useDropdown;
