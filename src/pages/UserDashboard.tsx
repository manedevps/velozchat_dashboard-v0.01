import { useParams } from 'react-router-dom'
import { useEffect, useState } from 'react'
import { getUser } from '../services/userService'
import { User } from '../types/user'

export default function UserDashboard() {
  const { userId } = useParams()
  const [user, setUser] = useState<User | null>(null)

  useEffect(() => {
    const fetchUserData = async () => {
      if (userId) {
        const userData = await getUser(userId)
        setUser(userData)
      }
    }
    fetchUserData()
  }, [userId])

  if (!user) {
    return <div>Loading user data...</div>
  }

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold">Welcome, {user.name}</h1>
      <p className="text-gray-600">You are viewing the dashboard for user: {user.email}</p>
    </div>
  )
}
