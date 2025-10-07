export interface Ticket {
    title: string;
    description: string;
    category: "software" | "hardware" | "network" | "other";
    priority: number;
    progress: number;
    status: "open" | "in_progress" | "closed";
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
        software: number;
        hardware: number;
        network: number;
        other: number;
    };
}
export type StatisticsResponse = Promise<{
    "message": "string",
    "totalTickets": number,
    "ticketsByCategory": {
        "hardware": number,
        "software": number
    },
    "ticketsByStatus": {
        "open": number,
        "closed": number
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
