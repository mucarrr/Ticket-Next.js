import React, { FC } from 'react'
import { getStatistics } from '@/utils/service'
const Statistics:FC = async () => {
  const { totalTickets, ticketsByStatus, averagePriority } = await getStatistics();
  return (
    <div className="py-4 grid grid-cols-2 md:grid-cols-4 gap-4 px-6 bg-zinc-900 border-b border-zinc-800">
      <div className="bg-blue-900/20 text-blue-400 p-3 rounded-lg">
        <p className="text-2xl font-bold">{totalTickets}</p>
        <p className="text-xs text-blue-400/70">Total Tickets</p>
      </div>
      <div className="bg-blue-900/20 text-green-400 p-3 rounded-lg">
        <p className="text-2xl font-bold">{ticketsByStatus.closed}</p>
        <p className="text-xs text-green-400/70">Closed Tickets</p>
      </div>
      <div className="bg-blue-900/20 text-yellow-400 p-3 rounded-lg max-lg:hidden">
        <p className="text-2xl font-bold">{ticketsByStatus.open}</p>
        <p className="text-xs text-yellow-400/70">Open Tickets</p>
      </div>
      <div className="bg-blue-900/20 text-purple-400 p-3 rounded-lg max-lg:hidden">
        <p className="text-2xl font-bold">{averagePriority}</p>
        <p className="text-xs text-purple-400/70">Average Priority</p>
      </div>
    </div>
  )
}

export default Statistics