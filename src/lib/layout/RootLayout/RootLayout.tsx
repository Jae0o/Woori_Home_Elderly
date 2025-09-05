import { useKakaoLoader } from "react-kakao-maps-sdk";
import { Outlet } from "react-router";

import { Navbar } from "./components";

const KAKAO_MAP_API_KEY = import.meta.env.VITE_KAKAO_MAP_API_KEY;

const RootLayout = () => {
  useKakaoLoader({
    appkey: KAKAO_MAP_API_KEY,
  });

  return (
    <main className="w-full h-full flex flex-col">
      <Navbar />

      <div className="w-full grow-1 overflow-y-auto">
        <Outlet />
      </div>
    </main>
  );
};

export default RootLayout;
