import { NextResponse } from "next/server";
import connectMongo from "@/utils/coonectMongo";
import Ticket, { ITicket } from "../models/ticket";

export async function POST(request: Request) {
  try {
    await connectMongo(); // nextde her seferinde 
    const body = (await request.json()) as ITicket;
    const newTicket = await Ticket.create(body);
    return NextResponse.json({ message: "Ticket created successfully", ticket: newTicket }, { status: 201 });
  } catch (error) {
    return NextResponse.json({ message: "Ticket creation failed", error: error instanceof Error ? error.message : "Unknown error" }, { status: 400 });
  }
}
export async function GET(request: Request) {
  try {
    await connectMongo();
    const tickets = await Ticket.find();
    return NextResponse.json({ message: "Tickets fetched successfully", tickets });
  } catch (error) {
    return NextResponse.json({ message: "Tickets fetching failed", error: error instanceof Error ? error.message : "Unknown error" }, { status: 400 });
  }
}