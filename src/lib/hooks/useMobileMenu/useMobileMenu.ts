import { useCallback, useEffect, useState } from "react";

interface UseMobileMenuReturn {
  isOpen: boolean;
  toggle: () => void;
  open: () => void;
  close: () => void;
  activeSubmenu: string | null;
  toggleSubmenu: (menuId: string) => void;
}

const useMobileMenu = (): UseMobileMenuReturn => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSubmenu, setActiveSubmenu] = useState<string | null>(null);

  const toggle = useCallback(() => {
    setIsOpen(prev => !prev);
  }, []);

  const open = useCallback(() => {
    setIsOpen(true);
  }, []);

  const close = useCallback(() => {
    setIsOpen(false);
    setActiveSubmenu(null);
  }, []);

  const toggleSubmenu = useCallback((menuId: string) => {
    setActiveSubmenu(prev => (prev === menuId ? null : menuId));
  }, []);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }

    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  useEffect(() => {
    const handleEscapeKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        close();
      }
    };

    if (isOpen) {
      document.addEventListener("keydown", handleEscapeKey);
    }

    return () => {
      document.removeEventListener("keydown", handleEscapeKey);
    };
  }, [isOpen, close]);

  return {
    isOpen,
    toggle,
    open,
    close,
    activeSubmenu,
    toggleSubmenu,
  };
};

export default useMobileMenu;
