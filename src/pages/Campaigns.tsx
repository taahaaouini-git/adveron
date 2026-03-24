import { Link } from "react-router-dom"
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import {
  Card,
  CardAction,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { CampaignTable } from "@/components/campaign-table"

export function Campaigns() {
  return (
    <div className="flex flex-1 flex-col gap-4 py-4 md:gap-6 md:py-6 lg:px-6 px-4">
      {/* Breadcrumb Section */}
      <Breadcrumb>
        <BreadcrumbList>
          <BreadcrumbItem>
            <BreadcrumbLink asChild>
              <Link to="/dashboard">Dashboard</Link>
            </BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator />
          <BreadcrumbItem>
            <BreadcrumbPage>Campaigns</BreadcrumbPage>
          </BreadcrumbItem>
        </BreadcrumbList>
      </Breadcrumb>

      <div className="flex flex-col gap-6">
        <div className="flex items-center justify-between">
          <h1 className="text-3xl font-bold tracking-tight">Campaigns</h1>
          <Button>Create Campaign</Button>
        </div>

        {/* Featured Campaign Card */}
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          <Card className="relative w-full pt-0">
            <div className="absolute inset-0 z-10 aspect-video bg-black/35 rounded-t-xl" />
            <img
              src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=800"
              alt="Campaign performance"
              className="relative z-0 aspect-video w-full object-cover brightness-60 grayscale dark:brightness-40 rounded-t-xl"
            />
            <CardHeader>
              <CardAction>
                <Badge variant="secondary">Top Performer</Badge>
              </CardAction>
              <CardTitle>Summer Sale 2024</CardTitle>
              <CardDescription>
                Our most successful campaign this year with a 5.8x ROAS across Meta platforms.
              </CardDescription>
            </CardHeader>
            <CardFooter>
              <Button className="w-full" variant="outline">View Analytics</Button>
            </CardFooter>
          </Card>
          
          <Card className="relative w-full pt-0">
            <div className="absolute inset-0 z-10 aspect-video bg-black/35 rounded-t-xl" />
            <img
              src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=800"
              alt="Reporting"
              className="relative z-0 aspect-video w-full object-cover brightness-60 grayscale dark:brightness-40 rounded-t-xl"
            />
            <CardHeader>
              <CardAction>
                <Badge variant="secondary">Optimization</Badge>
              </CardAction>
              <CardTitle>Google Ads Strategy</CardTitle>
              <CardDescription>
                High-intent search keywords focusing on enterprise tech solutions.
              </CardDescription>
            </CardHeader>
            <CardFooter>
              <Button className="w-full" variant="outline">Adjust Budget</Button>
            </CardFooter>
          </Card>

          <Card className="relative w-full pt-0">
            <div className="absolute inset-0 z-10 aspect-video bg-black/35 rounded-t-xl" />
            <img
              src="https://images.unsplash.com/photo-1611162617474-5b21e879e113?auto=format&fit=crop&q=80&w=800"
              alt="Social Media"
              className="relative z-0 aspect-video w-full object-cover brightness-60 grayscale dark:brightness-40 rounded-t-xl"
            />
            <CardHeader>
              <CardAction>
                <Badge variant="secondary">New</Badge>
              </CardAction>
              <CardTitle>TikTok Viral Hooks</CardTitle>
              <CardDescription>
                Short-form video content targeting Gen Z demographics for brand awareness.
              </CardDescription>
            </CardHeader>
            <CardFooter>
              <Button className="w-full" variant="outline">Manage Creative</Button>
            </CardFooter>
          </Card>
        </div>

        {/* Campaign Table */}
        <div className="flex flex-col gap-4">
          <div className="flex items-center justify-between">
            <h2 className="text-xl font-semibold">All Campaigns</h2>
          </div>
          <CampaignTable />
        </div>
      </div>
    </div>
  )
}

export default Campaigns
