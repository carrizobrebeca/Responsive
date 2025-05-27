import React, { useState } from 'react';

const SidebarRight = () => {


    return (
        <div
            className={`fixed rigth-50 bg-bg flex-col items-center 
                w-[30rem] 
                h-[100%] border br-2 border-border 
                py-[1.4rem] px-[1rem] transition-[width] 
                duration-500 ease-in-out`}
        >
            <div className="w-full flex items-center items-center">
                <img
                    src=
                    "https://w7.pngwing.com/pngs/857/213/png-transparent-man-avatar-user-business-avatar-icon.png"
                    className="w-20 h-20 object-cover rounded-full "
                />
                <div className="text-[2.1rem] text-red-400 font-bold cursor-pointer" >
                    <span className="text-[1.35rem] px-[0.8rem]">Nombre</span>
                    <span className="text-[1rem] px-[0.8rem]">Usuario</span>

                </div>
            </div>

            <div className="flex-col items-center h-[5rem] w-full">
                <h3 className='pt-7 text-text text-[1.35rem]'>Sugerencias para ti</h3>
            </div>
            {/* 5 usuarios */}
           <div className="w-full flex items-center pb-7">
  <img
    src="https://w7.pngwing.com/pngs/857/213/png-transparent-man-avatar-user-business-avatar-icon.png"
    className="w-20 h-20 object-cover rounded-full"
  />
  
  <div className="flex flex-col justify-center px-4 max-w-[12rem] overflow-hidden">
    <span className="text-[1.35rem] text-text font-bold truncate">NombreMuyLargoDeEjemplo</span>
    <span className="text-[1rem] text-gray-600 truncate">usuario_muy_largo_123</span>
  </div>
  
  <button className="text-[1rem] px-[0.8rem] whitespace-nowrap">Agregar</button>
</div>
<div className="w-full flex items-center pb-7">
  <img
    src="https://w7.pngwing.com/pngs/857/213/png-transparent-man-avatar-user-business-avatar-icon.png"
    className="w-20 h-20 object-cover rounded-full"
  />
  
  <div className="flex flex-col justify-center px-4 max-w-[12rem] overflow-hidden">
    <span className="text-[1.35rem] text-text font-bold truncate">NombreMuyLargoDeEjemplo</span>
    <span className="text-[1rem] text-gray-600 truncate">usuario_muy_largo_123</span>
  </div>
  
  <button className="text-[1rem] px-[0.8rem] whitespace-nowrap">Agregar</button>
</div>
<div className="w-full flex items-center pb-7">
  <img
    src="https://w7.pngwing.com/pngs/857/213/png-transparent-man-avatar-user-business-avatar-icon.png"
    className="w-20 h-20 object-cover rounded-full"
  />
  
  <div className="flex flex-col justify-center px-4 max-w-[12rem] overflow-hidden">
    <span className="text-[1.35rem] text-text font-bold truncate">NombreMuyLargoDeEjemplo</span>
    <span className="text-[1rem] text-gray-600 truncate">usuario_muy_largo_123</span>
  </div>
  
  <button className="text-[1rem] px-[0.8rem] whitespace-nowrap">Agregar</button>
</div>
<div className="w-full flex items-center pb-7">
  <img
    src="https://w7.pngwing.com/pngs/857/213/png-transparent-man-avatar-user-business-avatar-icon.png"
    className="w-20 h-20 object-cover rounded-full"
  />
  
  <div className="flex flex-col justify-center px-4 max-w-[12rem] overflow-hidden">
    <span className="text-[1.35rem] text-text font-bold truncate">NombreMuyLargoDeEjemplo</span>
    <span className="text-[1rem] text-gray-600 truncate">usuario_muy_largo_123</span>
  </div>
  
  <button className="text-[1rem] px-[0.8rem] whitespace-nowrap">Agregar</button>
</div>
<div className="w-full flex items-center pb-7">
  <img
    src="https://w7.pngwing.com/pngs/857/213/png-transparent-man-avatar-user-business-avatar-icon.png"
    className="w-20 h-20 object-cover rounded-full"
  />
  
  <div className="flex flex-col justify-center px-4 max-w-[12rem] overflow-hidden">
    <span className="text-[1.35rem] text-text font-bold truncate">NombreMuyLargoDeEjemplo</span>
    <span className="text-[1rem] text-gray-600 truncate">usuario_muy_largo_123</span>
  </div>
  
  <button className="text-[1rem] px-[0.8rem] whitespace-nowrap">Agregar</button>
</div>
<div className="w-full flex items-center pb-7">
  <img
    src="https://w7.pngwing.com/pngs/857/213/png-transparent-man-avatar-user-business-avatar-icon.png"
    className="w-20 h-20 object-cover rounded-full"
  />
  
  <div className="flex flex-col justify-center px-4 max-w-[12rem] overflow-hidden">
    <span className="text-[1.35rem] text-text font-bold truncate">NombreMuyLargoDeEjemplo</span>
    <span className="text-[1rem] text-gray-600 truncate">usuario_muy_largo_123</span>
  </div>
  
  <button className="text-[1rem] px-[0.8rem] whitespace-nowrap">Agregar</button>
</div>

        </div>
    );
};

export default SidebarRight;
