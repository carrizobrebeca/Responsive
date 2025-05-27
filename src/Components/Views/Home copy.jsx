import React from 'react'

import SidebarLeft from '../Pages/SidebarLeft'
import SidebarLeftMessage from '../Pages/SidebarLeftMessage'
import SidebarLeftSugerencias from '../Pages/SidebarLeftSugerencias'

const Home = () => {
  return (
    <div className="grid min-h-screen grid-cols-[30rem_1fr] lg:grid-cols-[30rem_1fr_1fr_30rem] bg-gray-200">
      
      <div className="lg:col-span-1">
        <SidebarLeftMessage />
      </div>

      <main className="col-span-1 lg:col-span-2 bg-gray-100 p-8 h-auto overflow">
        <section className="mt-10 mb-10">
          <div className="bg-gray-400 p-8 rounded-xl text-gray-500 text-lg">
            {/* contenido */}
          </div>
        </section>
      </main>

      {/* Columna derecha, visible solo en pantallas grandes */}
      <div className="hidden lg:block">
        <SidebarLeftSugerencias />
      </div>
    </div>
  )
}

export default Home

