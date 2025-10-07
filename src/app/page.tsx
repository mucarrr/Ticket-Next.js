import React, { FC } from 'react'
import { getStatistics } from '@/utils/service'
import DoughnutChart from '@/components/chart/DoughnutChart'
import DashboardValue from '@/components/chart/DashboardValue'
import { TrendingUp } from 'lucide-react'
import { BarChart3 } from 'lucide-react'
import { PieChart } from 'lucide-react'

const Home:FC = async () => {
  const data = await getStatistics();
  return (
    <div className="p-2 md:p-6 space-y-8">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-800 mb-2">Dashboard</h1>
        <p className="text-gray-500">General status and analysis of our ticket management system</p>
      </div>

      <div className="space-y-8">
        <div className="grid lg:grid-cols-2 gap-5">
          <div>
            <h2 className="font-semibold mb-2 text-lg">Category Distribution</h2>
            <DoughnutChart value={data.ticketsByCategory} />
          </div>

          <div>
            <h2 className="font-semibold mb-2 text-lg">Status Distribution</h2>
            <DoughnutChart value={data.ticketsByStatus} />
          </div>
        </div>

        <div>
          <h2 className="font-semibold mb-2 text-lg">Time Based Analysis</h2>

          <div className="grid md:grid-cols-3 gap-5">
            <DashboardValue
              label="Today"
              value={data.openTicketsToday}
              icon={<TrendingUp className="text-green-500" />}
            />
            <DashboardValue
              label="Last 7 Days"
              value={data.openTicketsThisWeek}
              icon={<BarChart3 className="text-blue-500" />}
            />
            <DashboardValue
              label="This Year"
              value={data.openTicketsThisYear}
              icon={<PieChart className="text-purple-500" />}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home