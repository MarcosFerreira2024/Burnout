"use client"

import { redirect } from 'next/navigation';
import { createContext, useEffect, useState } from 'react';

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
    handleSearch:(e:React.FormEvent<HTMLFormElement> | React.MouseEvent<HTMLImageElement>)=>void,
    handleDeleteSearch:(e:React.MouseEvent<SVGSVGElement>)=>void
    
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
    

        function handleSearch (e:React.FormEvent<HTMLFormElement> | React.MouseEvent<HTMLImageElement>){
          e.preventDefault()
          if(searchValue !== ''){
            setModais(false)
            showModalPesquisa(false)
            if(!(pesquisas.includes(searchValue))){
              localStorage.setItem('search',searchValue)
              setPesquisas([...pesquisas,searchValue])
              
            }
            redirect(`/home/${searchValue}`)
          }
          return
            
    
    
        }
        useEffect(() => {
            if(localStorage.getItem('search') ){
                if(localStorage.getItem('search') === ""){
                    localStorage.removeItem("search")
                    return
                }
                const values = localStorage.getItem('search').split(" ")
            
                setPesquisas(values)
                return
                
            }

              
        
            
            },[setPesquisas] )

        const handleDeleteSearch = (e:React.MouseEvent<SVGSVGElement>)=>{
            e.preventDefault()
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
                setPesquisas,
                setSearchValue,
                showModalPesquisa,
                showModalCategories,
                setMounted,
                setAnima,
                setModais,
                handleDeleteSearch,
                handleSearch

                
            }}
        >
            {children}
        </NavContext.Provider>
    );
};