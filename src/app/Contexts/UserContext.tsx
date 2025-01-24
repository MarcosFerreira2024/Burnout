"use client"
import { createContext, useState } from 'react';

type ContextProviderProps = {
    children: React.ReactNode;
    user: User | null
};

type User = {
    name: string;
    email: string;
    role: string;
    photo: string;
    favoritos:{
        produtos: string[];
    };
    pedidos: {
        status: string;
        produtos: string[];
    }
    
};

type Context = {
    user: User;
    setUser: React.Dispatch<React.SetStateAction<User>>
}

export const UserContext = createContext({} as Context);

export const UserContextProvider = ({ children, user }: ContextProviderProps) => {

    const [data,setUser] = useState<User | null>(user)

    return (
        <UserContext.Provider
            value={{user: data , setUser} }
        >
            {children}
        </UserContext.Provider>
    );
};