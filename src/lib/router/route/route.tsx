import { createBrowserRouter } from "react-router";

import { IntroducePage } from "@app/index";

import { ROUTE_PATH } from "@lib/constants";

const route = createBrowserRouter([
  {
    path: ROUTE_PATH.INTRODUCE,
    element: <IntroducePage />,
    // errorElement: <GlobalError />,

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
