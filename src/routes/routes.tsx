import routesDocument from "./constants";
import { Analytics } from "@/analytics";
import { Campaigns } from "@/pages/Campaigns";
import { Landing } from "@/pages/Landing";
import { Users } from "@/pages/Users";
import { ContentCalendar } from "@/pages/ContentCalendar";
import { Layout } from "./enums";

const routes = [
  {
    path: routesDocument.landing,
    element: <Landing />,
    layout: Layout.Public,
  },
  {
    path: routesDocument.dashboard,
    element: <Analytics />,
    layout: Layout.Private,
  },
  {
    path: routesDocument.dashboardAnalytics,
    element: <Analytics />,
    layout: Layout.Private,
  },
  {
    path: routesDocument.campaigns,
    element: <Campaigns />,
    layout: Layout.Private,
  },
  {
    path: routesDocument.calendar,
    element: <ContentCalendar />,
    layout: Layout.Private,
  },
  {
    path: routesDocument.clients,
    element: <Analytics />,
    layout: Layout.Private,
  },
  {
    path: routesDocument.ads,
    element: <Analytics />,
    layout: Layout.Private,
  },
  {
    path: routesDocument.reports,
    element: <Analytics />,
    layout: Layout.Private,
  },
  {
    path: routesDocument.users,
    element: <Users />,
    layout: Layout.Private,
  },
];

export default routes;
