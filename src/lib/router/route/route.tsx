import { Navigate, createBrowserRouter } from "react-router";

import {
  ConsultPage,
  DirectionsPage,
  GreetingPage,
  GuidePage,
  HomeCarePage,
  InsurancePage,
  NotFoundPage,
  SponsorPage,
  VolunteerPage,
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
        path: ROUTE_PATH.COST_AND_CONTACT_CONSULT,
        element: <ConsultPage />,
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
        path: ROUTE_PATH.SPONSOR_AND_VOLUNTEER_SPONSOR,
        element: <SponsorPage />,
      },

      {
        path: ROUTE_PATH.SPONSOR_AND_VOLUNTEER_VOLUNTEER,
        element: <VolunteerPage />,
      },

      {
        path: "/sponsor-and-volunteer",
        element: (
          <Navigate
            to={ROUTE_PATH.SPONSOR_AND_VOLUNTEER_SPONSOR}
            replace
          />
        ),
      },

      {
        path: "*",
        element: <NotFoundPage />,
      },
    ],
  },
]);

export default route;
