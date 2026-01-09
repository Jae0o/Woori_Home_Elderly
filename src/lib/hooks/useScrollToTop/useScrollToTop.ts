import { useEffect, useRef } from "react";
import { useLocation } from "react-router";

const useScrollToTop = <T extends HTMLElement>() => {
  const ref = useRef<T>(null);
  const { pathname } = useLocation();

  useEffect(() => {
    ref.current?.scrollTo(0, 0);
  }, [pathname]);

  return ref;
};

export default useScrollToTop;
