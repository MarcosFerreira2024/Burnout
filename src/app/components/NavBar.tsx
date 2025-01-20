"use client"
import Image from 'next/image'
import { redirect } from 'next/navigation'
import React, { useContext,  useRef } from 'react'
import NavButton from './NavButtons'
import { NavContext} from '../Contexts/navBarContext'
import { NavData } from '../data/NavData'
import ModalCategories from './ModalCategories'
import ModalPesquisa from './ModalPesquisa'

 


function NavBar() {
    const {modalPesquisa,setModais,modais,showModalPesquisa,showModalCategories,modalCategories,setMounted,setAnima} = useContext(NavContext)

    const timeOutref = useRef(null)

    function handleModal(modalPrincipal:boolean,setModalPrincipal:React.Dispatch<React.SetStateAction<boolean>>,modalSecundario:boolean,setModalSecundario:React.Dispatch<React.SetStateAction<boolean>>){
        
        // essa função é para abrir e fechar os modais simultaneamente e evitar que as animações buguem caso o usuário fique fechando e abrindo os modais, função também controla as animações

        if(timeOutref.current) clearTimeout(timeOutref.current) // limpa os timeouts de animação se houver um timeout anterior
        

            if(modalSecundario && !modalPrincipal){ // verifica se o modal secundario esta aberto antes de abrir o modal principal para evitar que as animações buguem
                setModalPrincipal(true)
                setModalSecundario(false)
                timeOutref.current = setTimeout(()=>{
                 setAnima(false)
                },500)
                return
            }
            if(modalPrincipal){ //verifica se o modal principal ja foi aberto
                setModalPrincipal(false)
                timeOutref.current = setTimeout(()=>{
                setAnima(false)
                },500)
                setModais(false) // seta os modais como false pois não há nenhum modal aberto , essa lógica de modais abertos e animation afeta as logos e os tamanhos da Nav dentro do componente  NavButton
                return
            }
                setModalPrincipal(true) // se não há nenhum modal aberto, abre o que foi desejado e seta o mounted como true para evitar que a animação ocorra no refresh da página
                setMounted(true)
                setModais(true) // seta a logica de modais como aberto
                setAnima(true)
                timeOutref.current = setTimeout(()=>{
                setAnima(false)
                },500)
                return
        }


    function handleModalPesquisa() { 
        handleModal(modalPesquisa,showModalPesquisa,modalCategories,showModalCategories) // aqui é passado o modal que deseja ser aberto, a função que seta o estado desse modal  e o modal que será fechado + a função que seta o estado desse modal 
        return
    
    }

    function handleModalCategorias() {
        handleModal(modalCategories,showModalCategories,modalPesquisa,showModalPesquisa,)
         return

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
        
                    <NavButton  perfil={false} alt='Sair' href='/' label='Sair' src='/ui/sair.svg' />
            </div >
    
        </main>
   
    </nav>
  )
}

export default NavBar
