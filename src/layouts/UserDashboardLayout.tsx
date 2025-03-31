import { Outlet, useNavigate } from 'react-router-dom'
import { Home, User, ShoppingCart, FileText, LogOut } from 'lucide-react'

export default function UserDashboardLayout({ onLogout }: { onLogout: () => void }) {
  const navigate = useNavigate()

  const navItems = [
    { icon: Home, label: 'Resumen', path: 'overview' },
    { icon: ShoppingCart, label: 'Productos', path: 'products' },
    { icon: FileText, label: 'Documentos', path: 'documents' },
    { icon: User, label: 'Perfil', path: 'profile' },
  ]

  return (
    <div className="flex h-screen bg-gray-50">
      {/* Sidebar */}
      <div className="hidden md:flex md:flex-shrink-0">
        <div className="flex flex-col w-64 border-r border-gray-200 bg-white">
          <div className="flex items-center h-16 px-4 border-b border-gray-200">
            <h1 className="text-xl font-bold text-blue-600">Mi Panel</h1>
          </div>
          <div className="flex flex-col flex-grow p-4 overflow-y-auto">
            <nav className="flex-1 space-y-2">
              {navItems.map((item) => (
                <button
                  key={item.path}
                  onClick={() => navigate(item.path)}
                  className="flex items-center w-full px-4 py-3 text-sm font-medium text-gray-700 rounded-lg hover:bg-blue-50 hover:text-blue-600 transition-colors"
                >
                  <item.icon className="w-5 h-5 mr-3" />
                  {item.label}
                </button>
              ))}
            </nav>
          </div>
          <div className="p-4 border-t border-gray-200">
            <button
              onClick={() => {
                localStorage.removeItem('userRole')
                onLogout()
                navigate('/login')
              }}
              className="flex items-center w-full px-4 py-3 text-sm font-medium text-gray-700 rounded-lg hover:bg-red-50 hover:text-red-600 transition-colors"
            >
              <LogOut className="w-5 h-5 mr-3" />
              Cerrar Sesión
            </button>
          </div>
        </div>
      </div>

      {/* Main content */}
      <div className="flex flex-col flex-1 overflow-hidden">
        {/* Header */}
        <header className="flex items-center justify-between h-16 px-4 bg-white border-b border-gray-200">
          <div className="flex items-center">
            <h2 className="text-lg font-medium text-gray-900">Bienvenido a tu panel</h2>
          </div>
          <div className="flex items-center space-x-4">
            <button 
              onClick={() => {
                localStorage.removeItem('userRole')
                onLogout()
                navigate('/login')
              }}
              className="md:hidden p-2 text-gray-500 hover:text-red-600"
            >
              <LogOut className="w-5 h-5" />
            </button>
          </div>
        </header>

        {/* Content */}
        <main className="flex-1 overflow-y-auto p-4 md:p-6 bg-gray-50">
          <Outlet />
        </main>
      </div>
    </div>
  )
}
