import { NextResponse } from "next/server";
import connectMongo from "@/utils/coonectMongo";
import Ticket from "../../models/ticket";

export const GET = async(req:Request, {params}:{params:{id:string}}) => { //{params} bir object. icinde params var. onun da icinde id var.
    try{
        await connectMongo();
        const {id} = await params;
        const ticket = await Ticket.findById(id);
        return NextResponse.json({ message: "Ticket fetched successfully", ticket }, { status: 200 });
        }catch(error){
        return NextResponse.json({ message: "Ticket fetching failed", error: error instanceof Error ? error.message : "Unknown error" }, { status: 400 });
    }
}
export const PUT = async(req:Request, {params}:{params:{id:string}}) => {
    try{
        await connectMongo();
        const {id} = await params;
        const body = await req.json();
        const ticket = await Ticket.findByIdAndUpdate(id, body, { new: true });
        return NextResponse.json({ message: "Ticket updated successfully", ticket }, { status: 200 });
    }catch(error){
        return NextResponse.json({ message: "Ticket updating failed", error: error instanceof Error ? error.message : "Unknown error" }, { status: 400 });
    }
}
export const DELETE = async(req:Request, {params}:{params:{id:string}}) => {
    try{
        await connectMongo();
        const {id} = await params;
        await Ticket.findByIdAndDelete(id);
        return NextResponse.json({ message: "Ticket deleted successfully" }, { status: 200 });
    }catch(error){
        return NextResponse.json({ message: "Ticket deleting failed", error: error instanceof Error ? error.message : "Unknown error" }, { status: 400 });
    }
}