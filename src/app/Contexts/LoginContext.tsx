"use client"
import { createContext, useState } from 'react';

type ContextProviderProps = {
    children: React.ReactNode;
};

type ContextLogin = {
 showActivationModal:boolean,
 setShowActivationModal:React.Dispatch<React.SetStateAction<boolean>>,
};

export const LoginContext = createContext({} as ContextLogin);


 
export const LoginContextProvider = ({ children }: ContextProviderProps) => {
    const [showActivationModal,setShowActivationModal] = useState(false)

    return (
        <LoginContext.Provider value={
            {
                showActivationModal,
                setShowActivationModal,
            }
        }>{children}</LoginContext.Provider>
    );
};