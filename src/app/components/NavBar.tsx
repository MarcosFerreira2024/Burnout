"use client"
import Image from 'next/image'
import { redirect } from 'next/navigation'
import React, { useContext } from 'react'
import NavButton from './NavButtons'
import { NavContext} from '../Contexts/navBarContext'
import { NavData } from '../data/NavData'
import ModalCategories from './ModalCategories'
import ModalPesquisa from './ModalPesquisa'
import { UserContext } from '../Contexts/UserContext'

 


function NavBar() {
    const {modais,handleModalPesquisa,handleModalCategorias,handleLogout} = useContext(NavContext)

    const {user} = useContext(UserContext)


 

  return (
    <nav>

            <ModalPesquisa />
            <ModalCategories/>
        <main className='px-5 fixed globalShadow   bg-mainBg z-[999]     '>
            

      
            <div className={`flex flex-col items-start gap-5 justify-between min-h-[calc(100vh)]  pt-5 pb-5 `}>
                    <div>
                        {modais?<Image onClick={()=> redirect('/home')} src={`/ui/logo-mobile.svg`} width={37} height={37} className={`min-h-[37px] min-w-[37px] cursor-pointer`} alt='Logo Burnout' />:
                        <div>
                                <Image onClick={()=> redirect('/home')} src={`/auth/logo-burnout.svg`} width={160} height={37} className="hidden xl:block cursor-pointer" alt='Logo Burnout' />
                                <Image onClick={()=> redirect('/home')} src={`/ui/logo-mobile.svg`} width={37} height={37} className=" xl:hidden min-h-[37px] min-w-[37px] cursor-pointer  " alt='Logo Burnout' /> 
                        </div>}
                        <div className='flex gap-5 pt-5 flex-col'>
                            {NavData.map((item,i)=> (
                                <NavButton  onClick={item.label==="Pesquisa"?handleModalPesquisa:item.label==="Categorias"?handleModalCategorias:null}  href={item.redirect} alt={item.alt} label={item.label} perfil={item.perfil} src={item.label==="perfil"?(user.photo?user.photo:"/ui/perfil.svg"):item.src} key={i}/>
                            ))}
                        </div>

                    </div>
        
                    <div className='flex flex-col gap-5 min-w-full'>
                    {user.role==="ADMIN"?<NavButton onClick={null} perfil={false} alt='Ver Painel Admin' href={"/admin"} label='Admin'  src='/ui/cadeado.svg'/> : null }
                    <NavButton onClick={handleLogout} perfil={false} alt='Sair' href={false} label='Sair' src='/ui/sair.svg' />

                    </div>
            </div >
    
        </main>
   
    </nav>
  )
}

export default NavBar
