
import React, { FC } from 'react'
import { getTickets } from '@/utils/service'


const TicketsGrid: FC = async () => {
    const { tickets } = await getTickets();
    const categories = [...new Set(tickets.map((ticket) => ticket.category))];
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">

            {categories.map((category, key) => {
                const categoryTickets = tickets.filter((ticket) => ticket.category === category);
                return (
                    <div key={key}>
                        
                    </div>
                )
            })}


        </div>
    )

}

export default TicketsGrid