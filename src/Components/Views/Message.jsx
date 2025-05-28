import React, { useState } from 'react'
import SidebarLeft from '../Pages/SidebarLeft'
import SidebarRight from '../Pages/SidebarRight'
import SidebarLeftMessage from '../Pages/SidebarLeftMessage'
import SidebarLeftNotification from '../Pages/SidebarLeftNotification'
import SidebarLeftSearch from '../Pages/SidebarLeftSearch'
import Header from '../Pages/Header'

const Message = () => {
  const [activePanel, setActivePanel] = useState(null);
  const [isSidebarMinimized, setIsSidebarMinimized] = useState(false);

  const handlePanelOpen = (panel) => {
    setActivePanel(panel);
    setIsSidebarMinimized(true); 
  };

  const handleResetSidebar = () => {
  setIsSidebarMinimized(false);
  setActivePanel(null);
};

  return (
    <div className="bg-gray-200 grid lg:grid-cols-4 xl:grid-cols-6 min-h-screen">
      <div className="lg:col-span-1 relative">
        <div className="relative z-20">
          <SidebarLeft
            minimized={isSidebarMinimized}
            setMinimized={setIsSidebarMinimized}
            onMessagesClick={() => handlePanelOpen('messages')}
            onNotificationsClick={() => handlePanelOpen('notifications')}
            onSearchClick={() => handlePanelOpen('search')}
            onDefaultClick={handleResetSidebar}
          />
         
        </div>

        {activePanel && (
          <div className="absolute inset-0 z-10 pointer-events-none">
            <div className="pointer-events-auto">
              {activePanel === 'messages' && <SidebarLeftMessage />}
              {activePanel === 'notifications' && <SidebarLeftNotification />}
              {activePanel === 'search' && <SidebarLeftSearch />}
            </div>
          </div>
        )}
      </div>

      <main className="lg:col-span-2 ml-[4.94rem] xl:col-span-4 bg-gray-100 p-8 min-h-screen overflow">
       <Header />
      </main>

      <div className="lg:col-span-1">
        <SidebarRight />
      </div>
    </div>
  )
}

export default Message