import { Badge } from "@/components/ui/badge"
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"

const campaigns = [
  {
    name: "Summer Sale 2024",
    client: "Acme Corp",
    platform: "Meta",
    budget: "$5,000",
    status: "Active",
    results: { leads: 120, roas: "3.5x" },
  },
  {
    name: "Google Search - High Intent",
    client: "Global Tech",
    platform: "Google",
    budget: "$8,000",
    status: "Active",
    results: { leads: 450, roas: "4.2x" },
  },
  {
    name: "TikTok Brand Awareness",
    client: "Fashion Nova",
    platform: "TikTok",
    budget: "$3,000",
    status: "Paused",
    results: { leads: 85, roas: "2.1x" },
  },
  {
    name: "Retargeting Campaign",
    client: "Acme Corp",
    platform: "Meta",
    budget: "$2,000",
    status: "Active",
    results: { leads: 210, roas: "5.8x" },
  },
  {
    name: "Youtube Video Ads",
    client: "Global Tech",
    platform: "Google",
    budget: "$10,000",
    status: "Active",
    results: { leads: 320, roas: "3.1x" },
  },
]

export function CampaignTable() {
  return (
    <div className="rounded-md border bg-card">
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Name</TableHead>
            <TableHead>Client</TableHead>
            <TableHead>Platform</TableHead>
            <TableHead>Budget</TableHead>
            <TableHead>Status</TableHead>
            <TableHead className="text-right">Results (Leads / ROAS)</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {campaigns.map((campaign) => (
            <TableRow key={campaign.name}>
              <TableCell className="font-medium">{campaign.name}</TableCell>
              <TableCell>{campaign.client}</TableCell>
              <TableCell>
                <Badge variant="outline" className={
                  campaign.platform === "Meta" ? "border-blue-500 text-blue-500" :
                  campaign.platform === "Google" ? "border-red-500 text-red-500" :
                  "border-black text-black dark:border-white dark:text-white"
                }>
                  {campaign.platform}
                </Badge>
              </TableCell>
              <TableCell>{campaign.budget}</TableCell>
              <TableCell>
                <Badge variant={campaign.status === "Active" ? "default" : "secondary"}>
                  {campaign.status}
                </Badge>
              </TableCell>
              <TableCell className="text-right">
                <span className="font-medium text-emerald-600">{campaign.results.leads} leads</span>
                <span className="mx-2 text-muted-foreground">/</span>
                <span className="font-medium text-blue-600">{campaign.results.roas}</span>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  )
}
