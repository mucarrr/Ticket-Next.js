import React, { FC } from 'react'

const TicketsLoading:FC = () => {
  return (
    <div className="animate-pulse flex flex-col gap-4">
      <div className="w-full h-10 bg-gray-200 rounded-md"></div>
      <div className="w-full h-10 bg-gray-200 rounded-md"></div>
      <div className="w-full h-10 bg-gray-200 rounded-md"></div>
      <div className="w-full h-10 bg-gray-200 rounded-md"></div>
      <div className="w-full h-10 bg-gray-200 rounded-md"></div>
    </div>
  )
}

export default TicketsLoading