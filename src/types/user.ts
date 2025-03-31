export interface User {
  id: string
  username: string
  password: string
  name: string
  email: string
  companyName: string
  role: 'admin' | 'user' // Solo dos roles posibles ahora
  status: 'active' | 'inactive'
  avatar: string
  createdAt: string
}
