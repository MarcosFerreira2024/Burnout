"use client"
import Image from 'next/image'
import { redirect } from 'next/navigation'
import React from 'react'
import NavButton from './NavButtons'



function NavBarMobile() {
  return (
    <>
        <aside className='items-center fixed gap-2 h-[60px] top-0 w-[100%] bg-mainBg  inner drop flex  justify-between p-2  '>
            <Image onClick={()=> redirect("/home")} src={"/auth/logo-burnout.svg"} alt='logo burnout' width={120} height={25} />
            <div className='flex hover:bg-mainStroke ease-in-out duration-300 opacity-90 transition-all items-center relative  p-2 rounded-md bg-mainBg font-poppins w-[100%] max-w-[300px]  border-mainStroke border-[1px]  inner drop outline-none'>
                <label htmlFor="search" className='flex items-center  cursor-pointer'><Image alt='' src={"/ui/pesquisa.svg"} width={16} className='absolute right-2' height={16} /></label>
                <input type="search" className='outline-none bg-transparent w-[85%] placeholder:text-secundaryTitle text-subtitle text-secundaryTitle ' placeholder='Pesquisar' id='search'/>
            </div>
            <div>
                <NavButton alt='perfil' label='perfil' src='/ui/perfil.png' perfil />
            </div>
        </aside>
        <main className='px-5 h-[60px] py-5 fixed bottom-0 w-[100%] bg-mainBg  inner drop  '>
        

        </main>
    
    
    </>

  )
}

export default NavBarMobile
