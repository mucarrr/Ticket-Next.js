import { Ticket, Plus, Mail, ChartBar, House, Users } from "lucide-react"

export const navigationItems = [
  {
    label: "Dashboard",
    icon: House,
    href: "/",
  },
  {
    label: "Tickets",
    icon: Ticket,
    href: "/tickets",
  },
  {
    label: "New Ticket",
    icon: Plus,
    href: "/ticket/add",
  },
  {
    label: "Teams",
    icon: Users,
    href: "/#",
  },
  {
    label: "Inbox",
    icon: Mail,
    href: "/#",
  },
  {
    label: "Statistics",
    icon: ChartBar,
    href: "/#",
  }
]
export const statusBadgeColors = {
  open: "bg-blue-500",
  in_progress: "bg-yellow-500",
  closed: "bg-green-500",
}
export const TICKET_CATEGORIES = ["software", "Hardware", "Network", "Other"];
export const TICKET_PRIORITIES = [1, 2, 3, 4, 5];
export enum PRIORITY_LABELS {
  "Low" = 1,
  "Medium",
  "High",
  "Critical",
  "Urgent",
}
export const TICKET_STATUSES = ["open", "in_progress", "closed"];
