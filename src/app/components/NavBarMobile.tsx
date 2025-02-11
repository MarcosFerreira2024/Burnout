"use client"
import Image from 'next/image'
import { redirect } from 'next/navigation'
import React, { useContext, useEffect } from 'react'
import NavButton from './NavButtons'
import { NavContext } from '../Contexts/navBarContext'
import InputPesquisa from './InputPesquisa'
import { NavDataMobile } from '../data/NavData'
import ModalCategories from './ModalCategories'
import { UserContext } from '../Contexts/UserContext'


function NavBarMobile() {
  const {handleSearch,handleModalCategorias,handleLogout} = useContext(NavContext)

  let lastScrollTop = 0;
  
  const handleScroll = () =>{
    const element = document.querySelectorAll('.header')

    if(lastScrollTop < document.documentElement.scrollTop){
      element.forEach((item) => item.classList.add('hidden'))
      element.forEach((item) => item.classList.remove('flex'))
      
    } else{
      element.forEach((item) => item.classList.remove('hidden'))
      element.forEach((item) => item.classList.add('flex'))
    }

    const scrollTop = document.documentElement.scrollTop
    lastScrollTop = scrollTop


  }

  useEffect(()=>{

    window.addEventListener('scroll', handleScroll);

    return () => window.removeEventListener('scroll', handleScroll);
  })

  const {user} = useContext(UserContext)
  return (
    <>      
        <ModalCategories />
        <aside  className={`items-center globalShadow header    fixed gap-2 h-[60px] top-0 w-[100%] bg-mainBg  z-[999]   flex  justify-between p-2  `}>
            <Image  onClick={()=> redirect("/home")} src={"/auth/logo-burnout.svg"} alt='logo burnout' width={120} height={25} />
            <form onSubmit={handleSearch} className='relative group outline-none flex items-center'>
              <InputPesquisa name='search'  placeholder='Pesquisar'  type='search'/>
            </form>

            <div className='min-w-[32px]'>
                <NavButton href='/perfil' alt='perfil' label='perfil' src={user?(user.photo?user.photo:"/ui/perfil.png"):"/ui/perfil.png"} perfil />
            </div>
        </aside>
        <main className={` z-[999] globalShadow       fixed bottom-0 w-[100%] bg-mainBg     `}>
        
            <div className='flex justify-between px-5 py-5 header '>
            {NavDataMobile.map((item,i)=> (
              <NavButton   onClick={item.label==="Categorias"?handleModalCategorias:null} href={item.redirect} alt={item.alt} label={item.label} perfil={item.perfil} src={item.src} key={i}/>
                            ))}
              <NavButton onClick={handleLogout} perfil={false} alt='Sair' href={false} label='Sair' src='/ui/sair.svg' />
              </div>
        </main>
    
    
    </>

  )
}

export default NavBarMobile
