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