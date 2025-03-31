import { BarChart2, Users, CreditCard } from 'lucide-react'

export default function Home() {
  const stats = [
    { name: 'Total Revenue', value: '$45,231', icon: BarChart2, change: '+12% from last month' },
    { name: 'Active Users', value: '2,345', icon: Users, change: '+19% from last month' },
    { name: 'New Orders', value: '1,234', icon: CreditCard, change: '+4% from last month' },
  ]

  return (
    <div className="space-y-6">
      <h1 className="text-2xl font-bold text-gray-900">Dashboard Overview</h1>
      
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {stats.map((stat) => (
          <div key={stat.name} className="bg-white p-6 rounded-lg shadow">
            <div className="flex items-center">
              <div className="p-3 rounded-lg bg-indigo-100 text-indigo-600">
                <stat.icon className="h-6 w-6" />
              </div>
              <div className="ml-4">
                <h3 className="text-sm font-medium text-gray-500">{stat.name}</h3>
                <p className="text-2xl font-semibold text-gray-900">{stat.value}</p>
                <p className="text-sm text-gray-500">{stat.change}</p>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="bg-white p-6 rounded-lg shadow">
        <h2 className="text-lg font-medium text-gray-900 mb-4">Recent Activity</h2>
        <div className="space-y-4">
          {[1, 2, 3, 4, 5].map((i) => (
            <div key={i} className="flex items-start pb-4 border-b border-gray-100 last:border-0 last:pb-0">
              <div className="flex-shrink-0 h-10 w-10 rounded-full bg-gray-200 flex items-center justify-center">
                <span className="text-gray-500">U{i}</span>
              </div>
              <div className="ml-4">
                <p className="text-sm font-medium text-gray-900">User #{i} completed an action</p>
                <p className="text-sm text-gray-500">About {i} hour{i !== 1 ? 's' : ''} ago</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
