'use client'
import React, { FC, useState } from 'react'
import { Menu } from 'lucide-react'
import logo from '@/assets/logo.webp'
import Image from 'next/image'

const Sidebar:FC = () => {
  const [isCollapsed, setIsCollapsed] = useState(true)
  return (
    <aside
      className={`bg-zinc-900 border-r border-zinc-800 flex flex-col transition-all duration-300 h-screen ${isCollapsed ? "w-16" : "w-64"}
      }`}
    >
      <div className={`py-6 px-4 border-b border-zinc-800 h-21 `}>
        <div className="flex items-center justify-between">
          <div className={`bg-white rounded-full ${isCollapsed ? "" : "px-4"} flex items-center gap-1`}>
          <Image src={logo} alt="logo" width={30} height={30} className="size-[30px]" />
          {!isCollapsed && <p className="text-sm font-bold">Ticket</p>}
          </div>
          <button
            onClick={() => setIsCollapsed(!isCollapsed)}
            className="p-2 rounded-lg text-gray-400 hover:text-white hover:bg-zinc-800 transition"
          >
            <Menu className="size-5" />
          </button>
        </div>
      </div>
    </aside>
  )
}

export default Sidebar