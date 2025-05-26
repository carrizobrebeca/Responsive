import React, { useEffect, useRef } from 'react'

const SidebarL = () => {
//         const sideBar = document.documentElementById('sidebar');
//     const menuBtn = document.documentElementById('menubtn');
//  menuBtn.addEventLinstener('click', () => {
//       sideBar.classList.toggle('minimize')
//     })

const sidebarRef = useRef(null);
    const menuBtnRef = useRef(null);

    useEffect(() => {
        const handleToggle = () => {
            sidebarRef.current.classList.toggle('minimize');
        };

        const btn = menuBtnRef.current;
        btn.addEventListener('click', handleToggle);

        return () => {
            btn.removeEventListener('click', handleToggle);
        };
    }, []);


   
    return (
         //sideBar .minimized w-[4.94rem]
        <div
            id="sidebar"
            ref={sidebarRef}
            className="fixed bg-bg flex-col items-center w-[15rem] h-[100%] border br-2 border-border py-[1.4rem] px-[1rem] transition-[width] duration-500 ease-in-out"
        >
            <div className="w-[100%] flex items-center">
                <h2 id="menubtn"
                    ref={menuBtnRef} className="text-gray-100 font-bold font-mono w-[2rem] gap-[0.7rem] pl-[0.455rem] overflow-hidden">E</h2>
                <span
                    className="text-[2.1rem] text-text font-bold cursor-pointer"
                    
                >
                    Evently
                </span>
            </div>


            <div className='flex-col items-center h-[5rem] w-[100%]'>
      
            </div>
            
            <ul className='w-[100%] flex-col gap-[0.8rem]'>
             
                <li className='relative overflow-hidden'>
               
                    <a href="" className='flex py-[0.55rem] px-[0] rounded-xl hover:bg-header'>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
                            <path stroke-linecap="round" stroke-linejoin="round" d="m2.25 12 8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25" />
                        </svg>
                        <span className='text-[1.35rem] py-[0] px-[0.8rem]'>Inicio</span>
                    </a>
                </li>

                <li className=''>
             
                    <a href="" className='flex py-[0.55rem] px-[0] rounded-xl hover:bg-header'>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
                            <path stroke-linecap="round" stroke-linejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
                        </svg>
                        <span className='text-[1.35rem] py-[0] px-[0.8rem]'>Buscar</span>
                    </a>
                </li>
           
                <li className=''>
                  
                    <a href="" className='flex py-[0.55rem] px-[0] rounded-xl hover:bg-header'>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M2.036 12.322a1.012 1.012 0 0 1 0-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178Z" />
                            <path stroke-linecap="round" stroke-linejoin="round" d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                        </svg>
                        <span className='text-[1.35rem] py-[0] px-[0.8rem]'>Explorar</span>
                    </a>
                </li>
                <li className=''>
          
                    <a href="" className='flex py-[0.55rem] px-[0] rounded-xl hover:bg-header'>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M2.25 12.76c0 1.6 1.123 2.994 2.707 3.227 1.087.16 2.185.283 3.293.369V21l4.076-4.076a1.526 1.526 0 0 1 1.037-.443 48.282 48.282 0 0 0 5.68-.494c1.584-.233 2.707-1.626 2.707-3.228V6.741c0-1.602-1.123-2.995-2.707-3.228A48.394 48.394 0 0 0 12 3c-2.392 0-4.744.175-7.043.513C3.373 3.746 2.25 5.14 2.25 6.741v6.018Z" />
                        </svg>
                        <span className='text-[1.35rem] py-[0] px-[0.8rem]'>Mensajes</span>
                    </a>
                </li>
                <li className=''>
                
                    <a href="" className='flex py-[0.55rem] px-[0] rounded-xl hover:bg-header'>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z" />
                        </svg>
                        <span className='text-[1.35rem] py-[0] px-[0.8rem]'>Notificaciones</span>
                    </a>
                </li>
               
                <li className=''>
                   
                    <a href="" className='flex py-[0.55rem] px-[0] rounded-xl hover:bg-header'>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z" />
                        </svg>
                        <span className='text-[1.35rem] py-[0] px-[0.8rem]'>Perfil</span>
                    </a>
                </li>
            </ul>
            <div className='flex-col items-center h-[30rem]'></div>
            <div className='fixed bottom-6 flex items-center'>

                <span className='text-[0.8rem] text-text '> © 2025 REBECA CARRIZO BOURLOT</span>
            </div>

        </div>
    )
}

export default SidebarL


    // const toggleTheme = () => {
    //   const current = document.documentElement.getAttribute('data-theme');
    //   const next = current === 'dark' ? 'light' : 'dark';
    //   document.documentElement.setAttribute('data-theme', next);
    // };
            {/* <button onClick={toggleTheme}>Cambiar tema</button> */}