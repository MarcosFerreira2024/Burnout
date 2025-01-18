"use client"

import { createContext, useState } from 'react';

type ContextProviderProps = {
    children: React.ReactNode;
};

type NavBarContext = {
    modal: boolean;
    setModal: React.Dispatch<React.SetStateAction<boolean>>,
    mounted: boolean,
    setMounted: React.Dispatch<React.SetStateAction<boolean>>,
    anima:boolean,
    setAnima:React.Dispatch<React.SetStateAction<boolean>>
    
};

export const NavContext = createContext({} as NavBarContext);

export const NavContextProvider = ({ children }: ContextProviderProps) => {
    const [modal, setModal] = useState(false);
    const [mounted,setMounted] = useState(false)
    const [anima,setAnima] = useState(false)


    return (
        <NavContext.Provider
            value={{
                modal,
                setModal,
                mounted,
                setMounted,
                anima,
                setAnima,
                
            }}
        >
            {children}
        </NavContext.Provider>
    );
};