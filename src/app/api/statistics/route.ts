import { NextResponse } from "next/server";
import connectMongo from "@/utils/coonectMongo";
import Ticket from "../models/ticket";
export const GET = async(req:Request) => {
    try{
        await connectMongo();
        const tickets = await Ticket.find();
        const totalTickets = tickets.length;
        const ticketsByCategory = tickets.reduce((total, ticket) => { //reduce burda gruplama yapiyor.
            total[ticket.category] = (total[ticket.category] || 0) + 1;
            return total;
        }, {});
        const ticketsByStatus = tickets.reduce((total, ticket) => { //reduce burda gruplama yapiyor.
            total[ticket.status] = (total[ticket.status] || 0) + 1;
            return total;
        }, {});
        const closedTickets = tickets.filter((ticket) => ticket.status === "Closed").length; 
        const completionRate = Number(totalTickets > 0 ? (closedTickets / totalTickets * 100).toFixed(1) : 0)
        const highPriorityTickets = tickets.filter((ticket)=>ticket.priority>4).length;
        const averagePriority = Number(tickets.reduce((total, ticket)=> total+ticket.priority, 0) / totalTickets).toFixed(1) //reduce burda toplama yapiyor.
        const now = new Date();
        const today= new Date(now.getFullYear(), now.getMonth(), now.getDate());
        const openTicketsToday = tickets.filter((ticket)=>new Date(ticket.createdAt)>=today).length;
        const thisWeek = new Date(now.getTime() - 7 * 24 * 60 * 60 * 1000);
        const openTicketsThisWeek = tickets.filter((ticket)=>new Date(ticket.createdAt)>=thisWeek).length;
        const thisMonth = new Date(now.getFullYear(), now.getMonth(), 1);
        const openTicketsThisMonth = tickets.filter((ticket)=>new Date(ticket.createdAt)>=thisMonth).length;
        const thisYear = new Date(now.getFullYear(), 0, 1);
        const openTicketsThisYear = tickets.filter((ticket)=>new Date(ticket.createdAt)>=thisYear).length;  
        return NextResponse.json({ message: "Tickets fetched successfully", totalTickets, ticketsByCategory, ticketsByStatus, completionRate, highPriorityTickets, averagePriority, openTicketsToday, openTicketsThisWeek, openTicketsThisMonth, openTicketsThisYear }, { status: 200 });
    }catch(error){
        return NextResponse.json({ message: "Tickets fetching failed", error: error instanceof Error ? error.message : "Unknown error" }, { status: 400 });
    }
}
// reduce toplama islemi mantigi 
// initial value: 0
// her iterasyonda: total = total + ticket.priority
// sonuç: tüm priority değerlerinin toplamı (sum)
// Sonra ortalama:
// sum / totalTickets → ortalama
// .toFixed(1) → 1 ondalık basamak (string döner)
// Özet:
// Önceki: accumulator = {}, kategorilere göre sayaç
// Bu: accumulator = number, priority toplamı