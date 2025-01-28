"use client"
import Image from 'next/image'
import { redirect } from 'next/navigation'
import React, { useContext } from 'react'
import NavButton from './NavButtons'
import { NavContext} from '../Contexts/navBarContext'
import { NavData } from '../data/NavData'
import ModalCategories from './ModalCategories'
import ModalPesquisa from './ModalPesquisa'
import { logOut } from '../actions/logout'

 


function NavBar() {
    const {modalPesquisa,handleModal,modais,showModalPesquisa,showModalCategories,modalCategories} = useContext(NavContext)


    function handleModalPesquisa() { 
        handleModal(modalPesquisa,showModalPesquisa,modalCategories,showModalCategories) // aqui é passado o modal que deseja ser aberto, a função que seta o estado desse modal  e o modal que será fechado + a função que seta o estado desse modal 
        return
    
    }

    function handleModalCategorias() {
        handleModal(modalCategories,showModalCategories,modalPesquisa,showModalPesquisa,)
         return

     }
    const handleLogout = async () =>{
        logOut()
        localStorage.clear()
        redirect('/login')

        
    }  

  return (
    <nav>

            <ModalPesquisa />
            <ModalCategories/>
        <main className='px-5 fixed globalShadow   bg-mainBg z-[999]     '>
            

      
            <div className={`flex flex-col items-start gap-5 justify-between min-h-[calc(100vh)]  pt-5 pb-5 `}>
                    <div>
                        {modais?<Image onClick={()=> redirect('/home')} src={`/ui/logo-mobile.svg`} width={37} height={37} className={`min-h-[37px] min-w-[37px]`} alt='Logo Burnout' />:
                        <div>
                                <Image onClick={()=> redirect('/home')} src={`/auth/logo-burnout.svg`} width={160} height={37} className="hidden xl:block" alt='Logo Burnout' />
                                <Image onClick={()=> redirect('/home')} src={`/ui/logo-mobile.svg`} width={37} height={37} className=" xl:hidden min-h-[37px] min-w-[37px]  " alt='Logo Burnout' /> 
                        </div>}
                        <div className='flex gap-5 pt-5 flex-col'>
                            {NavData.map((item,i)=> (
                                <NavButton onClick={item.label==="Pesquisa"?handleModalPesquisa:item.label==="Categorias"?handleModalCategorias:null}  href={item.redirect} alt={item.alt} label={item.label} perfil={item.perfil} src={item.src} key={i}/>
                            ))}
                        </div>

                    </div>
        
                    <NavButton onClick={handleLogout} perfil={false} alt='Sair' href={false} label='Sair' src='/ui/sair.svg' />
            </div >
    
        </main>
   
    </nav>
  )
}

export default NavBar
