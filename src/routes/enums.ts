export const Layout = {
  Public: "PublicLayout",
  Private: "DashboardLayout",
} as const;

export type LayoutValue = (typeof Layout)[keyof typeof Layout];
