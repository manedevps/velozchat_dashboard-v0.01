export default function Profile() {
  return (
    <div className="space-y-6">
      <h1 className="text-2xl font-bold text-gray-900">Mi Perfil</h1>
      
      <div className="bg-white p-6 rounded-lg shadow">
        <div className="flex flex-col md:flex-row gap-6">
          <div className="flex-shrink-0">
            <div className="h-32 w-32 rounded-full bg-gray-200 flex items-center justify-center overflow-hidden">
              <svg className="h-16 w-16 text-gray-400" fill="currentColor" viewBox="0 0 24 24">
                <path d="M24 20.993V24H0v-2.996A14.977 14.977 0 0112.004 15c4.904 0 9.26 2.354 11.996 5.993zM16.002 8.999a4 4 0 11-8 0 4 4 0 018 0z" />
              </svg>
            </div>
          </div>
          
          <div className="flex-grow">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700">Nombre</label>
                <p className="mt-1 text-sm text-gray-900">Juan</p>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">Apellido</label>
                <p className="mt-1 text-sm text-gray-900">Pérez</p>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">Email</label>
                <p className="mt-1 text-sm text-gray-900">juan.perez@ejemplo.com</p>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">Teléfono</label>
                <p className="mt-1 text-sm text-gray-900">+56 9 1234 5678</p>
              </div>
            </div>
            
            <div className="mt-6">
              <button className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700">
                Editar Perfil
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
