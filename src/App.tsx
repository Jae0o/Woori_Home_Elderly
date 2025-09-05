import { RouterProvider } from "react-router";

import { route } from "@lib/router";

function App() {
  return (
    <main className="w-full h-full flex items-center justify-center">
      <RouterProvider router={route} />
    </main>
  );
}

export default App;
