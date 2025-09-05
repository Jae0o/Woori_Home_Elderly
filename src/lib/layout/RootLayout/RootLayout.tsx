import { Outlet } from "react-router";

import { Navbar } from "./components";

const RootLayout = () => {
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
