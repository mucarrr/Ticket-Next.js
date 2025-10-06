'use client'
import React, { FC, useState } from 'react'
import { LogOut, Menu, HelpCircle } from 'lucide-react'
import logo from '@/assets/logo.webp'
import Image from 'next/image'
import { navigationItems } from '@/utils/constants'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

const Sidebar:FC = () => {
  const [isCollapsed, setIsCollapsed] = useState(true)
  const pathname = usePathname()
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
      <div className="flex-1 gap-2 px-4 mt-4 space-y-2">
        {navigationItems.map((item,key)=> <Link href={item.href} key={key} className={`flex items-center gap-3 px-3 py-2 hover:bg-zinc-800 rounded-lg transition ${pathname === item.href ? "bg-zinc-800 hover:bg-zinc-700 text-gray-100" : ""} ${isCollapsed ? "justify-center" : "justify-start"}`}>
        <item.icon className="size-5 text-gray-400 flex-shrink-0" />
        {!isCollapsed && <p className="text-sm text-gray-400 font-medium">{item.label}</p>}
        </Link>)}
      </div>
      <div className="p-4 space-y-2 border-t border-zinc-800">
        <button className="w-full bg-zinc-800 text-gray-400 hover:bg-zinc-700 rounded-lg p-2">
          <div className={`flex items-center  gap-3 ${isCollapsed ? "justify-center" : "justify-start"}`}>
            <HelpCircle className="size-5 text-gray-400 flex-shrink-0" />
            {!isCollapsed && <p className="text-sm text-gray-400 font-medium">Help</p>}
          </div>
        </button>
        
        <button className="w-full bg-zinc-800 text-gray-100 hover:bg-zinc-700 rounded-lg p-2">
          <div className={`flex items-center justify-center gap-3 ${isCollapsed ? "justify-center" : "justify-start"}`}>
            <LogOut className="size-5 text-gray-400 flex-shrink-0 flex" />
            {!isCollapsed && <p className="text-sm text-gray-400 font-medium">Logout</p>}
          </div>
        </button>
      </div>
    </aside>
  )
}

export default Sidebar