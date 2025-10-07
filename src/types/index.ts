export interface Ticket {
    title: string;
    description: string;
    category: "Software" | "Hardware" | "Network" | "Other";
    priority: number;
    progress: number;
    status: "Open" | "In Progress" | "Closed";
    createdAt: string;
    updatedAt: string;
    id: string;
}
export type TicketResponse = Promise<{
    message: string;
    ticket: Ticket;
}>
export type TicketsResponse = Promise<{
    message: string;
    tickets: Ticket[];
}>
export type MessageResponse = Promise<{
    message: string;
}>
export interface Statistics {
    totalTickets: number;
    ticketsByCategory: {
        Software: number;
        Hardware: number;
        Network: number;
        Other: number;
    };
}
export type StatisticsResponse = Promise<{
    "message": "string",
    "totalTickets": number,
    "ticketsByCategory": {
        "Hardware": number,
        "Software": number,
        "Network": number,
        "Other": number
    },
    "ticketsByStatus": {
        "Open": number,
        "Closed": number,
        "In Progress": number
    },
    "completionRate": number,
    "highPriorityTickets": number,
    "averagePriority": number,
    "openTicketsToday": number,
    "openTicketsThisWeek": number,
    "openTicketsThisMonth": number,
    "openTicketsThisYear": number
}>
export type CreateTicketResponse = Promise<{
    message: string;
    ticket: Ticket;
}>
export type UpdateTicketResponse = Promise<{
    message: string;
    ticket: Ticket;
}>
