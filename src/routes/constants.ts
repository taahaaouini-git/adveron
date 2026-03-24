interface IRoutesDocument {
  landing: string;
  login: string;
  register: string;
  dashboard: string;
  dashboardAnalytics: string;
  campaigns: string;
  calendar: string;
  clients: string;
  ads: string;
  reports: string;
  users: string;
}

const routesDocument: IRoutesDocument = {
  landing: "/",
  login: "/login",
  register: "/register",
  dashboard: "/dashboard",
  dashboardAnalytics: "/dashboard/analytics",
  campaigns: "/dashboard/campaigns",
  calendar: "/dashboard/calendar",
  clients: "/dashboard/clients",
  ads: "/dashboard/ads",
  reports: "/dashboard/reports",
  users: "/dashboard/users",
};

export default routesDocument;
