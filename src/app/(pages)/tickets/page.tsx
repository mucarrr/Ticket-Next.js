import { FC, Suspense } from 'react'
import { getTickets } from '@/utils/service'
import TicketsLoading from './loading';
import TicketsGrid from './tickets-grid';

const Tickets:FC = async () => {
  const {tickets} = await getTickets();
  return (
    <div className="mt-4">
      <div className="mb-6">
        <h1 className='text-2xl font-bold text-gray-800 mb-2'>Tickets</h1>
        <p className='text-gray-500'>Showing all tickets according to their categories and manage them here</p>
      </div>
      <Suspense fallback={<TicketsLoading />}> // sayfa icin hazirlanmis loaderi suspense icinde alt componente bu sekilde aktarabiliriz.
        <TicketsGrid  />
      </Suspense>
    </div>
  )
}
export default Tickets