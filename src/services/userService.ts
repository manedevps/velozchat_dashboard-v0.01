import { simulateApiCall } from './apiUtils'
import { User } from '../types/user'

// Mock data actualizado con solo dos roles
const mockUsers: User[] = [
  {
    id: '1',
    username: 'admin',
    password: 'admin123',
    name: 'Admin Principal',
    email: 'admin@example.com',
    companyName: 'Empresa Admin',
    role: 'admin',
    status: 'active',
    avatar: '',
    createdAt: new Date().toISOString()
  },
  {
    id: '2',
    username: 'cliente1',
    password: 'cliente123',
    name: 'Cliente Ejemplo',
    email: 'cliente@example.com',
    companyName: 'Empresa Cliente',
    role: 'user',
    status: 'active',
    avatar: '',
    createdAt: new Date().toISOString()
  }
]

export const getUsers = async (): Promise<User[]> => {
  return simulateApiCall([...mockUsers])
}

export const getUser = async (id: string): Promise<User> => {
  const user = mockUsers.find(u => u.id === id)
  if (!user) throw new Error('Usuario no encontrado')
  return simulateApiCall({...user, password: ''})
}

export const createUser = async (userData: Omit<User, 'id' | 'createdAt'>): Promise<User> => {
  const newUser: User = {
    ...userData,
    id: Math.random().toString(36).substring(2, 9),
    createdAt: new Date().toISOString()
  }
  mockUsers.push(newUser)
  return simulateApiCall({...newUser, password: ''})
}

export const updateUser = async (id: string, userData: Partial<User>): Promise<User> => {
  const userIndex = mockUsers.findIndex(u => u.id === id)
  if (userIndex === -1) throw new Error('Usuario no encontrado')
  
  const updatedUser = {
    ...mockUsers[userIndex],
    ...userData
  }
  
  mockUsers[userIndex] = updatedUser
  return simulateApiCall({...updatedUser, password: ''})
}

export const deleteUser = async (id: string): Promise<void> => {
  const userIndex = mockUsers.findIndex(u => u.id === id)
  if (userIndex === -1) throw new Error('Usuario no encontrado')
  
  mockUsers.splice(userIndex, 1)
  return simulateApiCall(undefined)
}
