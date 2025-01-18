"use client"
import Image from 'next/image'
import { redirect } from 'next/navigation'
import React, { useContext, useRef } from 'react'
import NavButton from './NavButtons'
import { NavContext} from '../Contexts/navBarContext'
import InputPesquisa from './InputPesquisa'
import { NavData } from '../data/NavData'

 

function NavBar() {
    const {modal,setModal,setMounted,setAnima} = useContext(NavContext)
    const timeOutref = useRef(null)
    function handleClick() {
       if(timeOutref.current){
         clearTimeout(timeOutref.current)
        }
       setModal(!modal)
       setMounted(true)
       setAnima(true)
       timeOutref.current = setTimeout(()=>{
        setAnima(false)
       },500)
        


       return
    }

  return (
    <>
        <aside className={`${modal?"translate-x-[72px] ": "translate-x-[-228px]"} w-[300px] min-h-[100vh] transition-all ease-in-out duration-700  border-[1px] border-mainStroke   bg-mainBg drop inner z-40    fixed`}>
            <div className='w-[100%] px-5 pt-5'>
                <InputPesquisa name='search' ref={null} placeholder='Pesquisar' type='search'   />
            
            </div>    
            
        </aside> 
        <main className='px-5 fixed   min-h-[calc(100vh)] bg-mainBg  z-[999] inner drop   '>
                        
                    
            <nav className='flex  flex-col min-h-[calc(100vh-20px)] relative items-start xl:items-center  pt-5'>
                <div className={`flex flex-col items-start gap-5   `}>
                    {modal?<Image onClick={()=> redirect('/home')} src={`/ui/logo-mobile.svg`} width={37} height={37} className={`min-h-[37px] min-w-[37px]`} alt='Logo Burnout' />:
                        <div>
                            <Image onClick={()=> redirect('/home')} src={`/auth/logo-burnout.svg`} width={160} height={37} className="hidden xl:block" alt='Logo Burnout' />
                            <Image onClick={()=> redirect('/home')} src={`/ui/logo-mobile.svg`} width={37} height={37} className=" xl:hidden min-h-[37px] min-w-[37px]  " alt='Logo Burnout' /> 
                        </div>}
                    {NavData.map((item,i)=> (
                        <NavButton onClick={item.label==="Pesquisa"?handleClick:null}  href={item.redirect} alt={item.alt} label={item.label} perfil={item.perfil} src={item.src} key={i}/>
                    ))}
        
                <div className={`flex flex-col items-start  absolute bottom-5  `}>
                    <NavButton perfil={false} alt='Sair' href='/' label='Sair' src='/ui/sair.svg' />
                </div >
                </div >
    
            </nav>
        </main>
   
    </>
  )
}

export default NavBar
