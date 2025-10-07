"use client";
import { Trash } from 'lucide-react';
import React, { FC } from 'react'
import { deleteTicket } from '@/utils/service';
import { toast } from 'react-toastify';
import { useRouter } from 'next/navigation';
interface Props {
    id: string;
}
const DeleteButton:FC<Props> = ({id}) => {
    const router = useRouter();
    return (
        <button onClick={()=>{
            if(!confirm("Are you sure you want to delete this ticket?")) return;
            deleteTicket(id);
            toast.success("Ticket deleted successfully");
            router.refresh();
        }} className="text-red-500 hover:text-red-700 transition">
          <Trash className="size-4" />
        </button>
      );
}

export default DeleteButton;