import { Package } from 'lucide-react'

const products = [
  {
    id: 1,
    name: 'Premium Widget',
    description: 'High-quality widget with advanced features',
    price: '$49.99',
    stock: 'Available',
    image: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80'
  },
  {
    id: 2,
    name: 'Basic Widget',
    description: 'Simple widget for everyday use',
    price: '$19.99',
    stock: 'Available',
    image: 'https://images.unsplash.com/photo-1523275335684-37898b6baf30?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80'
  },
  {
    id: 3,
    name: 'Deluxe Bundle',
    description: 'Everything you need in one package',
    price: '$99.99',
    stock: 'Last units',
    image: 'https://images.unsplash.com/photo-1546868871-7041f2a55e12?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80'
  }
]

export default function Products() {
  return (
    <div className="space-y-6">
      <h1 className="text-2xl font-bold text-gray-900">Available Products</h1>
      
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {products.map((product) => (
          <div key={product.id} className="bg-white rounded-lg shadow overflow-hidden">
            <div className="h-48 overflow-hidden">
              <img 
                src={product.image} 
                alt={product.name}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="p-6">
              <div className="flex items-center">
                <Package className="flex-shrink-0 h-5 w-5 text-gray-400" />
                <h3 className="ml-2 text-lg font-medium text-gray-900">{product.name}</h3>
              </div>
              <p className="mt-2 text-sm text-gray-500">{product.description}</p>
              <div className="mt-4 flex justify-between items-center">
                <span className="text-lg font-semibold text-gray-900">{product.price}</span>
                <span className="text-sm font-medium text-blue-600">{product.stock}</span>
              </div>
              <button className="mt-4 w-full px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700">
                Add to Cart
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
