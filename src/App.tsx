import { useState } from 'react'
import { Routes, Route, Navigate } from 'react-router-dom'
import Login from './pages/Login'
import DashboardLayout from './layouts/DashboardLayout'
import UserDashboardLayout from './layouts/UserDashboardLayout'
import Home from './pages/Home'
import Users from './pages/Users'
import Products from './pages/Products'
import Settings from './pages/Settings'
import Overview from './pages/user-dashboard/Overview'
import UserDashboardProducts from './pages/user-dashboard/Products'
import Documents from './pages/user-dashboard/Documents'
import Profile from './pages/user-dashboard/Profile'

export default function App() {
  const [userRole, setUserRole] = useState<string | null>(null)

  const handleLogin = (role: string) => {
    setUserRole(role)
  }

  const handleLogout = () => {
    setUserRole(null)
  }

  return (
    <Routes>
      <Route
        path="/login"
        element={userRole ? (
          <Navigate to={userRole === 'admin' ? '/' : '/user-dashboard'} />
        ) : (
          <Login onLogin={handleLogin} />
        )}
      />

      {/* Rutas de administrador */}
      {userRole === 'admin' && (
        <Route
          path="/"
          element={<DashboardLayout onLogout={handleLogout} />}
        >
          <Route index element={<Home />} />
          <Route path="users" element={<Users />} />
          <Route path="products" element={<Products />} />
          <Route path="settings" element={<Settings />} />
        </Route>
      )}

      {/* Rutas de cliente */}
      {userRole === 'user' && (
        <Route
          path="/user-dashboard"
          element={<UserDashboardLayout onLogout={handleLogout} />}
        >
          <Route index element={<Navigate to="overview" replace />} />
          <Route path="overview" element={<Overview />} />
          <Route path="products" element={<UserDashboardProducts />} />
          <Route path="documents" element={<Documents />} />
          <Route path="profile" element={<Profile />} />
        </Route>
      )}

      {/* Redirecciones */}
      <Route
        path="/"
        element={
          userRole ? (
            <Navigate to={userRole === 'admin' ? '/' : '/user-dashboard'} />
          ) : (
            <Navigate to="/login" replace />
          )
        }
      />
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  )
}
