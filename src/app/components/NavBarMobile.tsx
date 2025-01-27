"use client"
import Image from 'next/image'
import { redirect } from 'next/navigation'
import React, { useContext } from 'react'
import NavButton from './NavButtons'
import { NavContext } from '../Contexts/navBarContext'
import InputPesquisa from './InputPesquisa'


function NavBarMobile() {
  const {handleSearch} = useContext(NavContext)
  return (
    <>
        <aside className='items-center globalShadow fixed gap-2 h-[60px] top-0 w-[100%] bg-mainBg  z-[999]   flex  justify-between p-2  '>
            <Image onClick={()=> redirect("/home")} src={"/auth/logo-burnout.svg"} alt='logo burnout' width={120} height={25} />
            <form onSubmit={handleSearch} className='relative group outline-none flex items-center'>
              <InputPesquisa name='search'  placeholder='Pesquisar'  type='search'/>
            </form>

            <div className='min-w-[32px]'>
                <NavButton href='/perfil' alt='perfil' label='perfil' src='/ui/perfil.png' perfil />
            </div>
        </aside>
        <main className='px-5 z-[999] globalShadow h-[60px] py-5 fixed bottom-0 w-[100%] bg-mainBg     '>
        

        </main>
    
    
    </>

  )
}

export default NavBarMobile
