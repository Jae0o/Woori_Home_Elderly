import { Navigate, createBrowserRouter } from "react-router";

import {
  CostPage,
  DirectionsPage,
  GreetingPage,
  GuidePage,
  HomeCarePage,
  InsurancePage,
  NotFoundPage,
  SponsorAndVolunteerPage,
} from "@app/index";

import { ROUTE_PATH } from "@lib/constants";
import { RootLayout } from "@lib/layout";

const route = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,

    children: [
      {
        index: true,
        element: (
          <Navigate
            to={ROUTE_PATH.INTRODUCE_GREETING}
            replace
          />
        ),
      },

      {
        path: ROUTE_PATH.INTRODUCE_GREETING,
        element: <GreetingPage />,
      },

      {
        path: ROUTE_PATH.INTRODUCE_DIRECTIONS,
        element: <DirectionsPage />,
      },

      {
        path: "/introduce",
        element: (
          <Navigate
            to={ROUTE_PATH.INTRODUCE_GREETING}
            replace
          />
        ),
      },

      {
        path: ROUTE_PATH.SERVICE_INSURANCE,
        element: <InsurancePage />,
      },

      {
        path: ROUTE_PATH.SERVICE_HOME_CARE,
        element: <HomeCarePage />,
      },

      {
        path: "/service",
        element: (
          <Navigate
            to={ROUTE_PATH.SERVICE_INSURANCE}
            replace
          />
        ),
      },

      {
        path: ROUTE_PATH.COST_AND_CONTACT_GUIDE,
        element: <GuidePage />,
      },

      {
        path: ROUTE_PATH.COST_AND_CONTACT_COST,
        element: <CostPage />,
      },

      {
        path: "/cost-and-contact",
        element: (
          <Navigate
            to={ROUTE_PATH.COST_AND_CONTACT_GUIDE}
            replace
          />
        ),
      },

      {
        path: ROUTE_PATH.SPONSOR_AND_VOLUNTEER,
        element: <SponsorAndVolunteerPage />,
      },

      {
        path: "*",
        element: <NotFoundPage />,
      },
    ],
  },
]);

export default route;
