import { createBrowserRouter } from "react-router";

import { CostAndContactPage, IntroducePage, ServicePage, SponsorAndVolunteerPage } from "@app/index";

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
        path: ROUTE_PATH.SERVICE,
        element: <ServicePage />,
      },

      {
        path: ROUTE_PATH.COST_AND_CONTACT,
        element: <CostAndContactPage />,
      },

      {
        path: ROUTE_PATH.SPONSOR_AND_VOLUNTEER,
        element: <SponsorAndVolunteerPage />,
      },
    ],
  },
]);

export default route;
