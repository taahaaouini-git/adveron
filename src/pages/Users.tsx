import {
  UserPlusIcon,
  Trash2Icon,
  SettingsIcon
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"

const users = [
  {
    name: "Alex Johnson",
    email: "alex@agency.com",
    role: "Admin",
    status: "Active",
    joined: "2023-10-12",
  },
  {
    name: "Sarah Miller",
    email: "sarah@client.com",
    role: "Client",
    status: "Active",
    joined: "2023-11-20",
  },
  {
    name: "Mark Thompson",
    email: "mark@agency.com",
    role: "Editor",
    status: "Paused",
    joined: "2024-01-05",
  },
  {
    name: "Jessica Lee",
    email: "jessica@client.com",
    role: "Client",
    status: "Active",
    joined: "2024-02-15",
  },
]

export function Users() {
  return (
    <div className="flex flex-1 flex-col gap-6 py-4 md:gap-8 md:py-6 lg:px-6 px-4">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold tracking-tight px-0">User Management</h1>
          <p className="text-muted-foreground">Manage your agency team and client access.</p>
        </div>
        <Button className="gap-2">
          <UserPlusIcon size={18} /> Add User
        </Button>
      </div>

      <div className="rounded-xl border bg-card shadow-sm overflow-hidden">
        <Table>
          <TableHeader className="bg-muted/50">
            <TableRow>
              <TableHead>User</TableHead>
              <TableHead>Role</TableHead>
              <TableHead>Status</TableHead>
              <TableHead>Joined</TableHead>
              <TableHead className="text-right">Actions</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {users.map((user) => (
              <TableRow key={user.email} className="hover:bg-muted/30 transition-colors">
                <TableCell>
                  <div className="flex flex-col">
                    <span className="font-medium">{user.name}</span>
                    <span className="text-xs text-muted-foreground">{user.email}</span>
                  </div>
                </TableCell>
                <TableCell>
                  <Badge variant="outline" className={
                    user.role === "Admin" ? "border-primary text-primary" : "border-muted-foreground/30 text-muted-foreground"
                  }>
                    {user.role}
                  </Badge>
                </TableCell>
                <TableCell>
                  <div className="flex items-center gap-2">
                    <div className={`size-2 rounded-full ${user.status === "Active" ? "bg-emerald-500" : "bg-amber-500"}`} />
                    <span className="text-sm">{user.status}</span>
                  </div>
                </TableCell>
                <TableCell className="text-muted-foreground text-sm">{user.joined}</TableCell>
                <TableCell className="text-right">
                  <div className="flex items-center justify-end gap-2">
                    <Button variant="ghost" size="icon" className="size-8">
                      <SettingsIcon size={16} />
                    </Button>
                    <Button variant="ghost" size="icon" className="size-8 text-destructive hover:text-destructive hover:bg-destructive/10">
                      <Trash2Icon size={16} />
                    </Button>
                  </div>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </div>
  )
}

export default Users
