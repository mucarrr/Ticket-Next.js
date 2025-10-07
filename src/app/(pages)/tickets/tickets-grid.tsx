
import React, { FC } from 'react'
import { getTickets } from '@/utils/service'
import Card from '@/components/card';


const TicketsGrid: FC = async () => {
    const { tickets } = await getTickets();
    const categories = [...new Set(tickets.map((ticket) => ticket.category))]; //new set yazmadigim ilk adimda categorilerden olusan bir nesne yaptim. yalniz ticketler ayni categorilere sahip oldugu icin birden fazla ayni isim yer aldi nesnede. new set bu tekrarlari engelledi.
    return ( // sonrasinda spread operator(...) ile nesneyi arraye cevirdim. bu sekilde map yapabilirim artik.
        <div className="max-w-screen-2xl mx-auto px-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">

            {categories.map((category, key) => {
                const categoryTickets = tickets.filter((ticket) => ticket.category === category);
                return (
                    <div key={key} className="mb-8">
                      <div className="flex items-center justify-between mb-4">
                        <h2 className="text-xl font-semibold text-gray-800 flex items-center gap-2">
                          <div className="w-1 h-6 bg-blue-500 rounded-full " />
          
                          {category.charAt(0).toUpperCase() + category.slice(1)}
                        </h2>
          
                        <span>{categoryTickets.length} ticket</span>
                      </div>
          
                      <div className="grid grid-cols-[repeat(auto-fill,minmax(240px,1fr))] gap-4">
                        {categoryTickets.map((ticket) => (
                            <Card key={ticket.id} ticket={ticket} />
                        ))}
                      </div>
                    </div>
                  );
            })}


        </div>
    )

}

export default TicketsGrid