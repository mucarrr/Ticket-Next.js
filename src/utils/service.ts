import { ITicket } from "@/app/api/models/ticket";
import { TicketResponse } from "@/types";


const baseUrl = process.env.API_URL || "http://localhost:3002/api";
export const getTickets = async (): TicketResponse => {
    const response = await fetch(`${baseUrl}/tickets`);
    const data = await response.json();
    return data;
}
export const getTicket = async (id:string) => {
    const response = await fetch(`${baseUrl}/tickets/${id}`);
    const data = await response.json();
    return data;
}
export const createTicket = async (ticket:ITicket) => {
    const response = await fetch(`${baseUrl}/tickets`, {
        method: "POST",
        body: JSON.stringify(ticket),
    });
    const data = await response.json();
    return data;
}
export const updateTicket = async (id:string, ticket:ITicket) => {
    const response = await fetch(`${baseUrl}/tickets/${id}`, {
        method: "PUT",
        body: JSON.stringify(ticket),
    });
    const data = await response.json();
    return data;
}
export const deleteTicket = async (id:string) => {
    const response = await fetch(`${baseUrl}/tickets/${id}`, {
        method: "DELETE",
    });
    const data = await response.json();
    return data;
}
export const getStatistics = async () => {
    const response = await fetch(`${baseUrl}/statistics`);
    const data = await response.json();
    return data;
}