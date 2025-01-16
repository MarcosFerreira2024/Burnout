"use client"
import Image from 'next/image'
import { redirect } from 'next/navigation'
import React from 'react'
import NavButton from './NavButtons'

const dataNavBar = [
    {
        src:"/ui/pesquisa.svg",
        alt:"Abrir pesquisa",
        perfil:false,
        label:"Pesquisa"
    },
    {
        src:"/ui/categorias.svg",
        alt:"Ver categorias",
        perfil:false,
        label:"Categorias"
    },
    {
        src:"/ui/ofertas.svg",
        alt:"Ver ofertas",
        perfil:false,
        label:"Ofertas"
    },
    {
        src:"/ui/cupom.svg",
        alt:"Ver cupons",
        perfil:false,
        label:"Cupons"
    },
    {
        src:"/ui/new.svg",
        alt:"Abrir novidades",
        perfil:false,
        label:"Novidades"
    },
    {
        src:"/ui/cart.svg",
        alt:"Abrir carrinho",
        perfil:false,
        label:"Carrinho"
    },
    {
        src:"/ui/perfil.png",
        alt:"Abrir perfil",
        perfil:true,
        label:"Perfil"
    },

        
]

function NavBar() {
  return (
    <main className='px-5 xl:py-0 py-5 fixed min-h-[100vh] bg-mainBg rounded-r-lg inner drop  '>
        <nav className='flex flex-col min-h-[calc(100vh-20px)] items-start xl:items-center justify-between pt-5'>
            <div className='flex flex-col items-start gap-5 xl:pt-[57px] pt-[37px] '>
                <Image onClick={()=> redirect('/home')} src={`/auth/logo-burnout.svg`} width={160} height={37} className="hidden xl:block xl:absolute top-5" alt='Logo Empresa' />
                {dataNavBar.map((item,i)=> (
                    <NavButton alt={item.alt} label={item.label} perfil={item.perfil} src={item.src} key={i}/>
                ))}
      
            </div >
            <div className='flex items-start xl:pt-[20px] xl:pb-0 pb-5'>
                <NavButton src={"/ui/sair.svg"} alt={"Sair da conta"} perfil={false} label={"Sair"} />
            </div>

        </nav>
    </main>
  )
}

export default NavBar
