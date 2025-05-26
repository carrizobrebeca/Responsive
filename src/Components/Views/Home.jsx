import React from 'react'
// import SidebarL from '../Pages/SidebarL'
import SidebarLeft from '../Pages/SidebarLeft'

const Home = () => {
  //  const [activeTab, setActiveTab] = useState("posts");
  return (
 <div className="bg-gray-200 grid lg:grid-cols-4 xl:grid-cols-6 min-h-screen bg-gray-200">
      <div className="lg:col-span-1">
        <SidebarLeft />
      </div>
      <main className="lg:col-span-2 xl:col-span-4 bg-gray-100 p-8 h-auto overflow">
        {/* <button activeTab={activeTab} setActiveTab={setActiveTab} >NavBar</button> */}
        {/* <NavBar activeTab={activeTab} setActiveTab={setActiveTab} />
        <Header />
        {activeTab === "posts" && ( */}
          <section className="mt-10 mb-10">
            <div className="bg-gray-400 p-8 rounded-xl text-gray-500 text-lg">
              {/* <Post /> */}
            </div>
          </section>
        {/* )} */}
{/* 
        {activeTab === "events" && (
          <section className="mt-10 mb-10">
            <div className="text-gray-700 text-xl">Eventos aquí</div>
          </section>
        )}

        {activeTab === "notifications" && (
          <section className="mt-10 mb-10">
            <div className="text-gray-700 text-xl">Notificaciones aquí</div>
          </section>
        )} */}
      </main>
      <div className="lg:col-span-1">
        {/* <SideBarR /> */}
      </div>
    </div>
  )
}

export default Home   
      
   