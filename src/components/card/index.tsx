import { Ticket } from '@/types'; // absolute import
// import { Ticket} from '../../types'; relative import 
import React, { FC } from 'react'
import PriorityBadge from './PriorityBadge';
import DeleteButton from './DeleteButton';
import ProgressBar from './ProgressBar';
import StatusBadge from './StatusBadge';
import Link from 'next/link';
import { Calendar, Clock } from 'lucide-react';
interface  Props {
    ticket: Ticket;

}
const Card:FC<Props> = ({ticket}) => {
    const isRecent = new Date(ticket.createdAt) > new Date(Date.now() - 7 * 24 * 60 * 60 * 1000);
    const createdAt = new Date(ticket.createdAt).toLocaleDateString('en', { year: 'numeric', month: 'short', day: 'numeric' });
    const updatedAt = new Date(ticket.updatedAt).toLocaleDateString('en', { year: 'numeric', month: 'short', day: 'numeric' });
    return (
        <div className="group bg-zinc-800 rounded-xl shadow-sm hover:shadow-md shadow-zinc-900/20 transition border border-zinc-700 hover:border-zinc-600 overflow-hidden h-80">
          <div className="p-4 pb-3">
            <div className="flex items-start justify-between mb-3">
              <div className="flex items-center gap-2">
                <PriorityBadge priority={ticket.priority} />
                {isRecent && <div className="bg-green-100 text-green-800 px-2 text-xs py-1 rounded-full">New</div>}
              </div>
    
              <div className="opacity-0 group-hover:opacity-100 transition">
                <DeleteButton id={ticket.id} />
              </div>
            </div>
            <Link href={`/ticket/${ticket.id}`} className="block">
              <h3 className="font-semibold text-gray-200 mb-2 line-clamp-1 group-hover:text-blue-400 transition">
                {ticket.title}
              </h3>
              <p className="text-gray-200 text-sm line-clamp-2 mb-3 h-10">{ticket.description}</p>
            </Link>
            <div className="mb-3">
              <span className="inline-block bg-red-500 text-gray-200 text-xs px-2 py-1 rounded-md">{ticket.category}</span>
            </div>
            <div className="mb-3">
              <ProgressBar progress={ticket.progress} />
            </div>
          </div>
          <div className="px-4 py-3 bg-zinc-800/50 border-t border-zinc-700">
            <div className="flex items-center justify-between">
              <div className="flex flex-col gap-1">
                <div className="flex items-center gap-1 text-xs text-gray-200">
                  <Calendar className="size-3" />
                  <span>Created:   {createdAt}</span>
                </div>
                <div className="flex items-center gap-1 text-xs text-gray-200">
                  <Clock className="size-3" />
                  <span>Updated:   {updatedAt}</span>
                </div>
              </div>
              <StatusBadge status={ticket.status} />
            </div>
          </div>
        </div>
      );
}

export default Card