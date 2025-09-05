import { createBrowserRouter } from "react-router";

import { IntroducePage } from "@app/index";

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

      // {
      //   path: ROUTE_PATH.COMMUNITY,
      //   element: <CommunityPage />,
      // },
    ],
  },
]);

export default route;
