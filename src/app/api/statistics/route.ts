import { NextResponse } from "next/server";
import connectMongo from "@/utils/coonectMongo";
import Ticket from "../models/ticket";
export const GET = async(req:Request) => {
    try{
        await connectMongo();
        const tickets = await Ticket.find();
        const totalTickets = tickets.length;
        const ticketsByCategory = tickets.reduce((obj, ticket) => {
            obj[ticket.category] = (obj[ticket.category] || 0) + 1;
            return obj;
        }, {});
        const ticketsByStatus = tickets.reduce((obj, ticket) => {
            obj[ticket.status] = (obj[ticket.status] || 0) + 1;
            return obj;
        }, {});
        const closedTickets = tickets.filter((ticket) => ticket.status === "closed").length;
        const completionRate = Number(totalTickets > 0 ? (closedTickets / totalTickets * 100).toFixed(1) : 0)
        const highPriorityTickets = tickets.filter((ticket)=>ticket.priority>4).length;
        const averagePriority = Number(tickets.reduce((total, ticket)=> total+ticket.priority, 0) / totalTickets).toFixed(1)
        const now = new Date();
        const today= new Date(now.getFullYear(), now.getMonth(), now.getDate());
        const openTicketsToday = tickets.filter((ticket)=>new Date(ticket.createdAt)>=today).length;
        const thisWeek = new Date(now.getTime() - 7 * 24 * 60 * 60 * 1000);
        const openTicketsThisWeek = tickets.filter((ticket)=>new Date(ticket.createdAt)>=thisWeek).length;
        const thisMonth = new Date(now.getFullYear(), now.getMonth(), 1);
        const openTicketsThisMonth = tickets.filter((ticket)=>new Date(ticket.createdAt)>=thisMonth).length;
        const thisYear = new Date(now.getFullYear(), 0, 1);
        const openTicketsThisYear = tickets.filter((ticket)=>new Date(ticket.createdAt)>=thisYear).length;  
        return NextResponse.json({ message: "Tickets fetched successfully", tickets, totalTickets, ticketsByCategory, ticketsByStatus, completionRate, highPriorityTickets, averagePriority, openTicketsToday, openTicketsThisWeek, openTicketsThisMonth, openTicketsThisYear }, { status: 200 });
    }catch(error){
        return NextResponse.json({ message: "Tickets fetching failed", error: error instanceof Error ? error.message : "Unknown error" }, { status: 400 });
    }
}