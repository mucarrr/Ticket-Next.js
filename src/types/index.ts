export interface Ticket {
    title: string;
    description: string;
    category: "software" | "hardware" | "network" | "other";
    priority: number;
    progress: number;
    status: "open" | "in_progress" | "closed";
    createdAt: string;
    updatedAt: string;
    _id: string;
}
export type TicketResponse = Promise<{
    message: string;
    tickets: Ticket[];
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
export interface StatisticsResponse {
    message: string;
    statistics: Statistics;
}