import { createBrowserRouter } from "react-router";

import { IntroducePage, MapPage } from "@app/index";

import { ROUTE_PATH } from "@lib/constants";
import { RootLayout } from "@lib/layout";

const route = createBrowserRouter([
  {
    path: ROUTE_PATH.INTRODUCE,
    element: <RootLayout />,

    children: [
      {
        index: true,
        element: <IntroducePage />,
      },

      {
        path: ROUTE_PATH.MAP,
        element: <MapPage />,
      },

      {
        path: ROUTE_PATH.PROGRAM,
        element: <IntroducePage />,
      },
    ],
  },
]);

export default route;
