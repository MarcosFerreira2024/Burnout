"use client"

import { redirect } from 'next/navigation';
import { createContext, useEffect, useRef, useState } from 'react';
import { logOut } from '../actions/logout';

type ContextProviderProps = {
    children: React.ReactNode;
};

type NavBarContext = {
    modais: boolean,
    modalPesquisa: boolean,
    modalCategories: boolean,
    mounted: boolean,
    anima:boolean,
    searchValue:string,
    pesquisas:string[],
    setModais: React.Dispatch<React.SetStateAction<boolean>>,
    showModalPesquisa: React.Dispatch<React.SetStateAction<boolean>>,
    showModalCategories: React.Dispatch<React.SetStateAction<boolean>>,
    setMounted: React.Dispatch<React.SetStateAction<boolean>>,
    setAnima:React.Dispatch<React.SetStateAction<boolean>>,
    setPesquisas:React.Dispatch<React.SetStateAction<string[]>>,
    setSearchValue:React.Dispatch<React.SetStateAction<string>>,
    handleSearch:(e:React.FormEvent<HTMLFormElement> | React.MouseEvent<HTMLOrSVGElement>)=>void,
    handleDeleteSearch:(e:React.MouseEvent<SVGSVGElement | HTMLButtonElement>)=>void
    closeAllModais:()=>void
    handleModal:(modalPrincipal:boolean,setModalPrincipal:React.Dispatch<React.SetStateAction<boolean>>,modalSecundario:boolean,setModalSecundario:React.Dispatch<React.SetStateAction<boolean>>) => void
    handleModalPesquisa:()=>void,
    handleModalCategorias:()=>void
    handleLogout:()=>void
};

export const NavContext = createContext({} as NavBarContext);

export const NavContextProvider = ({ children }: ContextProviderProps) => {

    const [modalPesquisa, showModalPesquisa] = useState(false);

    const [modalCategories, showModalCategories] = useState(false);

    const [modais,setModais] = useState(false)

    const [mounted,setMounted] = useState(false)

    const [anima,setAnima] = useState(false)

    const [searchValue,setSearchValue] = useState('')

    const [pesquisas, setPesquisas] = useState<string[]>([])

    const timeOutref = useRef(null)

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

    function closeAllModais () {
        
        if(timeOutref.current) clearTimeout(timeOutref.current)
            if(modais){
                showModalPesquisa(false)
                showModalCategories(false)
                setModais(false) 
                setAnima(true)
                timeOutref.current = setTimeout(()=>{
                setAnima(false)
                },500)
                return
            }
            return
    }



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
    

     function handleSearch (e:React.FormEvent<HTMLFormElement> | React.MouseEvent<HTMLImageElement>){
          e.preventDefault()
          if(searchValue !== ''){
            setModais(false)
            showModalPesquisa(false)
            if(!(pesquisas.includes(searchValue))){
              const previousValue = localStorage.getItem('search')
              const updated = previousValue ? previousValue + " " + searchValue : searchValue
              localStorage.setItem('search',updated)
              setPesquisas(updated.split(" "))
              
            }
            redirect(`/home/${searchValue}/1`)
          }
          

            
    
    
        }
        useEffect(() => {
            setSearchValue('')
            if(localStorage.getItem('search') ){
                if(localStorage.getItem('search') === ""){
                    localStorage.removeItem("search")
                    return
                }
                const values = localStorage.getItem('search').split(" ")
            
                setPesquisas([...values])
                return
                
            }
              
        
            
        },[setPesquisas] )
        
        const handleDeleteSearch = (e:React.MouseEvent<SVGSVGElement>)=>{
            const updated =pesquisas.filter((item) => {
              if(item !== e.currentTarget.previousElementSibling?.textContent){
                return item
              }
             })
              setPesquisas(updated)
              localStorage.setItem('search',updated.join(" "))
            
          }


    return (
        <NavContext.Provider
            value={{

                pesquisas,
                modais,
                modalPesquisa,
                modalCategories,
                mounted,
                anima,
                searchValue,
                closeAllModais,
                handleModal,
                setPesquisas,
                setSearchValue,
                showModalPesquisa,
                showModalCategories,
                setMounted,
                setAnima,
                setModais,
                handleDeleteSearch,
                handleSearch,
                handleLogout,
                handleModalPesquisa,
                handleModalCategorias,

                
            }}
        >
            {children}
        </NavContext.Provider>
    );
};