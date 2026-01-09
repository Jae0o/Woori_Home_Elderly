import { useKakaoLoader } from "react-kakao-maps-sdk";
import { Outlet } from "react-router";

import { useScrollToTop } from "@lib/hooks";
import { Navbar } from "@lib/layout";

const KAKAO_MAP_API_KEY = import.meta.env.VITE_KAKAO_MAP_API_KEY;

const RootLayout = () => {
  const scrollContainerRef = useScrollToTop<HTMLDivElement>();

  useKakaoLoader({
    appkey: KAKAO_MAP_API_KEY,
  });

  return (
    <main className="w-full h-full flex flex-col">
      <Navbar />

      <div
        ref={scrollContainerRef}
        className="w-full grow-1 overflow-y-auto"
      >
        <Outlet />
      </div>
    </main>
  );
};

export default RootLayout;
