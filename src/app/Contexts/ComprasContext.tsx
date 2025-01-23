"use client"
import { createContext, useState } from 'react';

type ContextProviderProps = {
    children: React.ReactNode;
};

type Compras = {
    setAvisoCompra: React.Dispatch<React.SetStateAction<boolean>>
    aviso:boolean
};

export const ComprasContext = createContext({} as Compras);

export const ComprasContextProvider = ({ children }: ContextProviderProps) => {

    const [aviso,setAvisoCompra] = useState(false)

    return (
        <ComprasContext.Provider
            value={{
                aviso,
                setAvisoCompra
            }}
        >
            {children}
        </ComprasContext.Provider>
    );
};