import { useState } from "react"
import { 
  ChevronLeftIcon, 
  ChevronRightIcon, 
  PlusIcon,
  SearchIcon,
  FilterIcon,
  LayoutGridIcon,
  StretchHorizontalIcon,
  InstagramIcon,
  TargetIcon,
  VideoIcon,
  ClockIcon
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Card } from "@/components/ui/card"
import { 
  Select, 
  SelectContent, 
  SelectItem, 
  SelectTrigger, 
  SelectValue 
} from "@/components/ui/select"
import { Input } from "@/components/ui/input"
import { cn } from "@/lib/utils"

// Mock data for posts
const initialPosts = [
  {
    id: 1,
    date: 12,
    platform: "Instagram",
    title: "Agency Growth Tips",
    status: "Published",
    color: "bg-pink-500",
    time: "10:00 AM"
  },
  {
    id: 2,
    date: 12,
    platform: "Meta",
    title: "New Ad Creative v2",
    status: "Draft",
    color: "bg-blue-500",
    time: "02:00 PM"
  },
  {
    id: 3,
    date: 15,
    platform: "TikTok",
    title: "Viral Hook Test",
    status: "Scheduled",
    color: "bg-black",
    time: "11:30 AM"
  },
  {
    id: 4,
    date: 18,
    platform: "Google",
    title: "Search Term Optimization",
    status: "Draft",
    color: "bg-red-500",
    time: "09:00 AM"
  },
  {
    id: 5,
    date: 24,
    platform: "Meta",
    title: "Client Testimonial #3",
    status: "Scheduled",
    color: "bg-blue-500",
    time: "04:00 PM"
  }
]

export function ContentCalendar() {
  const [viewState, setViewState] = useState<"Monthly" | "Weekly">("Monthly")
  const days = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"]
  
  // Generate a mock grid for March 2024
  // March 1st starts on a Friday
  const grid = Array.from({ length: 35 }, (_, i) => {
    const dayNumber = i - 3; // Offset for March starting on Friday
    return dayNumber > 0 && dayNumber <= 31 ? dayNumber : null;
  })

  const getPostsForDay = (day: number) => {
    return initialPosts.filter(post => post.date === day)
  }

  return (
    <div className="flex flex-1 flex-col gap-6 py-4 md:gap-8 md:py-6 lg:px-6 px-4">
      {/* Header Section */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Content Calendar</h1>
          <p className="text-muted-foreground">Plan and schedule your agency's social media content.</p>
        </div>
        <div className="flex items-center gap-2">
          <div className="flex bg-muted/50 p-1 rounded-lg border">
            <Button 
              variant={viewState === "Monthly" ? "secondary" : "ghost"} 
              size="sm" 
              className="h-8 gap-2"
              onClick={() => setViewState("Monthly")}
            >
              <LayoutGridIcon size={14} /> Monthly
            </Button>
            <Button 
              variant={viewState === "Weekly" ? "secondary" : "ghost"} 
              size="sm" 
              className="h-8 gap-2"
              onClick={() => setViewState("Weekly")}
            >
              <StretchHorizontalIcon size={14} /> Weekly
            </Button>
          </div>
          <Button className="h-9 gap-2">
            <PlusIcon size={16} /> New Post
          </Button>
        </div>
      </div>

      {/* Navigation and Filters */}
      <Card className="border-none bg-transparent shadow-none">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-4 w-full md:w-auto">
            <div className="flex items-center gap-1">
              <Button variant="outline" size="icon" className="size-8">
                <ChevronLeftIcon size={16} />
              </Button>
              <h2 className="text-lg font-semibold px-4 min-w-[140px] text-center">March 2024</h2>
              <Button variant="outline" size="icon" className="size-8">
                <ChevronRightIcon size={16} />
              </Button>
            </div>
            <Button variant="outline" size="sm">Today</Button>
          </div>
          
          <div className="flex items-center gap-2 w-full md:w-auto">
            <div className="relative flex-1 md:w-64">
              <SearchIcon className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
              <Input placeholder="Search posts..." className="pl-9 h-9" />
            </div>
            <Select defaultValue="all">
              <SelectTrigger className="w-[140px] h-9">
                <SelectValue placeholder="Platform" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Platforms</SelectItem>
                <SelectItem value="meta">Meta</SelectItem>
                <SelectItem value="google">Google</SelectItem>
                <SelectItem value="tiktok">TikTok</SelectItem>
              </SelectContent>
            </Select>
            <Button variant="outline" size="icon" className="h-9 w-9">
              <FilterIcon size={16} />
            </Button>
          </div>
        </div>
      </Card>

      {/* Calendar Grid */}
      <div className="rounded-xl border bg-card shadow-sm overflow-hidden flex-1 flex flex-col">
        {/* Days Header */}
        <div className="grid grid-cols-7 border-b bg-muted/30">
          {days.map(day => (
            <div key={day} className="py-2 text-center text-xs font-semibold text-muted-foreground uppercase tracking-wider">
              {day}
            </div>
          ))}
        </div>
        
        {/* Calendar Cells */}
        <div className="grid grid-cols-7 grid-rows-5 flex-1 min-h-[600px]">
          {grid.map((day, i) => (
            <div 
              key={i} 
              className={cn(
                "border-r border-b p-2 min-h-[120px] transition-colors group relative",
                day === null ? "bg-muted/5 font-normal text-muted-foreground/30" : "hover:bg-muted/5",
                (i + 1) % 7 === 0 ? "border-r-0" : ""
              )}
            >
              {day && (
                <>
                  <div className="flex items-center justify-between mb-2">
                    <span className={cn(
                      "text-sm font-medium size-6 flex items-center justify-center rounded-full transition-colors",
                      day === 24 ? "bg-primary text-primary-foreground" : "text-foreground/70 group-hover:text-foreground"
                    )}>
                      {day}
                    </span>
                    <Button variant="ghost" size="icon" className="size-6 opacity-0 group-hover:opacity-100 transition-opacity">
                      <PlusIcon size={14} />
                    </Button>
                  </div>
                  
                  <div className="space-y-1.5 overflow-hidden">
                    {getPostsForDay(day).map(post => (
                      <div 
                        key={post.id} 
                        className={cn(
                          "px-2 py-1.5 rounded-md border text-[10px] sm:text-xs font-medium cursor-pointer transition-all hover:scale-[1.02] active:scale-[0.98] relative group/item",
                          "bg-card/80 backdrop-blur-md shadow-sm border-border/50",
                          "hover:border-primary/50"
                        )}
                      >
                        <div className="flex items-center gap-1.5 mb-1 text-muted-foreground/80">
                          {post.platform === "Instagram" && <InstagramIcon size={12} className="text-pink-500" />}
                          {post.platform === "Meta" && <TargetIcon size={12} className="text-blue-500" />}
                          {post.platform === "TikTok" && <VideoIcon size={12} className="text-black dark:text-white" />}
                          {post.platform === "Google" && <TargetIcon size={12} className="text-red-500" />}
                          <span className="truncate uppercase tracking-tight font-bold">{post.platform}</span>
                        </div>
                        <p className="truncate line-clamp-2 leading-tight mb-1">{post.title}</p>
                        <div className="flex items-center justify-between mt-1">
                          <div className="flex items-center gap-1">
                            <ClockIcon size={10} className="text-muted-foreground" />
                            <span className="text-[9px] text-muted-foreground">{post.time}</span>
                          </div>
                          <Badge 
                            variant="secondary" 
                            className={cn(
                              "h-3.5 px-1 py-0 text-[8px] uppercase font-black tracking-tighter",
                              post.status === "Published" ? "bg-emerald-500/10 text-emerald-500 border-none" :
                              post.status === "Scheduled" ? "bg-amber-500/10 text-amber-500 border-none" :
                              "bg-muted text-muted-foreground border-none"
                            )}
                          >
                            {post.status}
                          </Badge>
                        </div>
                      </div>
                    ))}
                  </div>
                </>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default ContentCalendar
