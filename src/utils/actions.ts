"use server"; // form action da kullanmak icin bunu yazmak zorundayim. 

import Ticket from "@/app/api/models/ticket";
import connectMongo from "./coonectMongo";
import { redirect } from "next/navigation";

export const createTicketAction = async (formData: FormData) => {
    const ticket = {
        title: formData.get('title'),
        description: formData.get('description'),
        category: formData.get('category'),
        priority:  formData.get('priority'),
        progress: formData.get('progress'),
        status: formData.get('status'),
    };
    await connectMongo();
    const newTicket = await Ticket.create(ticket);
    redirect("/tickets");
}

export const updateTicketAction = async (formData: FormData) => {
    const id = formData.get('id');
    const ticket = {
        title: formData.get('title'),
        description: formData.get('description'),
        category: formData.get('category') ,
        priority: formData.get('priority'),
        progress: formData.get('progress'),
        status: formData.get('status'),  
    };
    await connectMongo();
    const updatedTicket = await Ticket.findByIdAndUpdate(id, ticket, { new: true });
    redirect("/tickets");
}