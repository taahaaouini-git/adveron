import * as React from "react"

import { NavDocuments } from "@/components/nav-documents"
import { NavMain } from "@/components/nav-main"
import { NavSecondary } from "@/components/nav-secondary"
import { NavUser } from "@/components/nav-user"
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar"
import { LayoutDashboardIcon, ListIcon, ChartBarIcon, UsersIcon, CameraIcon, FileTextIcon, Settings2Icon, CircleHelpIcon, SearchIcon, DatabaseIcon, FileChartColumnIcon, FileIcon, CommandIcon } from "lucide-react"
import routesDocument from "@/routes/constants"
import { Link } from "react-router-dom"

const data = {
  user: {
    name: "shadcn",
    email: "m@example.com",
    avatar: "/avatars/shadcn.jpg",
  },
  navMain: [
    {
      title: "Dashboard",
      url: routesDocument.dashboard,
      icon: (
        <LayoutDashboardIcon
        />
      ),
    },
    {
      title: "Campaigns",
      url: routesDocument.campaigns,
      icon: (
        <ListIcon
        />
      ),
    },
    {
      title: "Content Calendar",
      url: routesDocument.calendar,
      icon: (
        <ChartBarIcon
        />
      ),
    },
    {
      title: "Clients",
      url: routesDocument.clients,
      icon: (
        <UsersIcon
        />
      ),
    },
    {
      title: "Users",
      url: routesDocument.users,
      icon: (
        <UsersIcon
        />
      ),
    },
  ],
  navClouds: [
    {
      title: "Ad Management",
      icon: (
        <CameraIcon
        />
      ),
      isActive: true,
      url: routesDocument.ads,
      items: [
        {
          title: "Active Ads",
          url: routesDocument.ads,
        },
        {
          title: "Ad History",
          url: routesDocument.ads,
        },
      ],
    },
    {
      title: "Agency Reporting",
      icon: (
        <FileTextIcon
        />
      ),
      url: routesDocument.reports,
      items: [
        {
          title: "Monthly ROI",
          url: routesDocument.reports,
        },
        {
          title: "Client Reports",
          url: routesDocument.reports,
        },
      ],
    },
    {
      title: "Prompts",
      icon: (
        <FileTextIcon
        />
      ),
      url: "#",
      items: [
        {
          title: "Active Proposals",
          url: "#",
        },
        {
          title: "Archived",
          url: "#",
        },
      ],
    },
  ],
  navSecondary: [
    {
      title: "Settings",
      url: "#",
      icon: (
        <Settings2Icon
        />
      ),
    },
    {
      title: "Get Help",
      url: "#",
      icon: (
        <CircleHelpIcon
        />
      ),
    },
    {
      title: "Search",
      url: "#",
      icon: (
        <SearchIcon
        />
      ),
    },
  ],
  documents: [
    {
      name: "Client Database",
      url: routesDocument.clients,
      icon: (
        <DatabaseIcon
        />
      ),
    },
    {
      name: "Performance Docs",
      url: routesDocument.reports,
      icon: (
        <FileChartColumnIcon
        />
      ),
    },
    {
      name: "Content Drafts",
      url: routesDocument.calendar,
      icon: (
        <FileIcon
        />
      ),
    },
  ],
}

export function AppSidebar({ 
  ...props 
}: React.ComponentProps<typeof Sidebar>) {
  return (
    <Sidebar collapsible="offcanvas" {...props}>
      <SidebarHeader>
        <SidebarMenu>
          <SidebarMenuItem>
            <SidebarMenuButton
              asChild
              className="data-[slot=sidebar-menu-button]:p-1.5!"
            >
              <Link to={routesDocument.dashboard}>
                <CommandIcon className="size-5!" />
                <span className="text-base font-semibold">Adveron</span>
              </Link>
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarHeader>
      <SidebarContent>
        <NavMain items={data.navMain} />
        <NavDocuments items={data.documents} />
        <NavSecondary items={data.navSecondary} className="mt-auto" />
      </SidebarContent>
      <SidebarFooter>
        <NavUser user={data.user} />
      </SidebarFooter>
    </Sidebar>
  )
}

