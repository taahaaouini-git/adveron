import { Routes, Route, Navigate } from "react-router-dom"
import { AppSidebar } from "@/components/app-sidebar"
import { ChartAreaInteractive } from "@/components/chart-area-interactive"
import { DataTable } from "@/components/data-table"
import { SectionCards } from "@/components/section-cards"
import { SiteHeader } from "@/components/site-header"
import { Analytics } from "@/analytics"
import { Campaigns } from "@/pages/Campaigns"
import { Users } from "@/pages/Users"
import { ContentCalendar } from "@/pages/ContentCalendar"
import {
  SidebarInset,
  SidebarProvider,
} from "@/components/ui/sidebar"

import data from "./data.json"

export function Dashboard() {
  return (
    <SidebarProvider
      style={
        {
          "--sidebar-width": "calc(var(--spacing) * 72)",
          "--header-height": "calc(var(--spacing) * 12)",
        } as React.CSSProperties
      }
    >
      <AppSidebar variant="inset" />
      <SidebarInset>
        <SiteHeader />
        <div className="flex flex-1 flex-col">
          <div className="@container/main flex flex-1 flex-col gap-2">
            <Routes>
              {/* Main Dashboard Overview */}
              <Route path="/" element={
                <div className="flex flex-col gap-4 py-4 md:gap-6 md:py-6">
                  <SectionCards />
                  <div className="px-4 lg:px-6">
                    <ChartAreaInteractive />
                  </div>
                  <DataTable data={data} />
                </div>
              } />
              
              {/* Sub Routes (Relative to /dashboard) */}
              <Route path="analytics" element={<Analytics />} />
              <Route path="campaigns" element={<Campaigns />} />
              <Route path="users" element={<Users />} />
              <Route path="calendar" element={<ContentCalendar />} />
              
              {/* Other routes can be added here, e.g. calendar, clients, etc. 
                  For now they map to Analytics as per current routes.tsx */}
              <Route path="calendar" element={<Analytics />} />
              <Route path="clients" element={<Analytics />} />
              <Route path="ads" element={<Analytics />} />
              <Route path="reports" element={<Analytics />} />

              {/* Catch-all relative to /dashboard */}
              <Route path="*" element={<Navigate to="/dashboard" replace />} />
            </Routes>
          </div>
        </div>
      </SidebarInset>
    </SidebarProvider>
  )
}

export default Dashboard
