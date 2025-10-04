import mongoose, { Schema } from "mongoose";
export interface ITicket {
    title: string;
    description: string;
    category: "software" | "hardware" | "network" | "other"; //ts de olabildigince kisitli kumeyi tanimlamaya calisiyoruz. bu yuzden string yazmadik
    priority: number,
    progress: number,
    status: "open" | "in_progress" | "closed";
}

export const ticketSchema = new Schema<ITicket>({
    title: { type: String, required: [true, "Title is required"] },
    description: { type: String, required: [true, "Description is required"] },
    category: { type: String, required: [true, "Category is required"], enum: ["software", "hardware", "network", "other"] },
    priority: { type: Number, required: [true, "Priority is required"], enum: [1, 2, 3, 4, 5] },
    progress: { type: Number, required: [true, "Progress is required"], min: 0, max: 100 },
    status: { type: String, required: [true, "Status is required"], enum: ["open", "in_progress", "closed"] },
}, { 
    timestamps: true, 
    versionKey: false, //_v degerini gostermemek icin
    toJSON:{
        virtuals: true,
        transform: (doc, ret) => {
            delete (ret as any)._id;
            return ret;
        },
        
    },
    toObject: {
        virtuals: true,
    }
});

const Ticket = mongoose.models.Ticket || mongoose.model<ITicket>("Ticket", ticketSchema);

export default Ticket;