"use client"
import { createContext, useState } from 'react';
import { User } from '../actions/getUser';
import { Cart } from '../actions/cart';

type ContextProviderProps = {
    children: React.ReactNode;
    user: User | null
    cart: Cart[] | null
};


type Context = {
    user: User;
    setUser: React.Dispatch<React.SetStateAction<User>>
    cart: Cart[];
    setDataCart: React.Dispatch<React.SetStateAction<Cart[]>>
}

export const UserContext = createContext({} as Context);

export const UserContextProvider = ({ children, user , cart }: ContextProviderProps) => {

    const [data,setUser] = useState<User | null>(user)

    const [dataCart, setDataCart] = useState(cart)

    return (
        <UserContext.Provider
            value={{user: data , setUser, cart: dataCart , setDataCart}  }
        >
            {children}
        </UserContext.Provider>
    );
};