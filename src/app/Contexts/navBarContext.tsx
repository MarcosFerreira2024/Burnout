"use client"

import { createContext, useState } from 'react';

type ContextProviderProps = {
    children: React.ReactNode;
};

type NavBarContext = {
    modais: boolean,
    setModais: React.Dispatch<React.SetStateAction<boolean>>,
    modalPesquisa: boolean,
    showModalPesquisa: React.Dispatch<React.SetStateAction<boolean>>,
    modalCategories: boolean,
    showModalCategories: React.Dispatch<React.SetStateAction<boolean>>,
    mounted: boolean,
    setMounted: React.Dispatch<React.SetStateAction<boolean>>,
    anima:boolean,
    setAnima:React.Dispatch<React.SetStateAction<boolean>>
    
};

export const NavContext = createContext({} as NavBarContext);

export const NavContextProvider = ({ children }: ContextProviderProps) => {
    const [modalPesquisa, showModalPesquisa] = useState(false);
    const [modalCategories, showModalCategories] = useState(false);
    const [modais,setModais] = useState(false)


    const [mounted,setMounted] = useState(false)
    const [anima,setAnima] = useState(false)


    return (
        <NavContext.Provider
            value={{
                modais,
                setModais,
                modalPesquisa,
                modalCategories,
                mounted,
                anima,
                showModalPesquisa,
                showModalCategories,
                setMounted,
                setAnima,
                
            }}
        >
            {children}
        </NavContext.Provider>
    );
};