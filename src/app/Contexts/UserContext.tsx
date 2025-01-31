"use client"
import { createContext, useState } from 'react';
import { User } from '../actions/getUser';

type ContextProviderProps = {
    children: React.ReactNode;
    user: User | null
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