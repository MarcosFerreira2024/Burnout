"use client"
import { createContext, useState } from 'react';
import { User } from '../actions/user';
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
    modalPicture : boolean
    setModalPicture: React.Dispatch<React.SetStateAction<boolean>>

}

export const UserContext = createContext({} as Context);

export const UserContextProvider = ({ children, user, cart  }: ContextProviderProps) => {

    const [data,setUser] = useState<User | null>(user)

    const [modalPicture, setModalPicture] = useState<boolean>(false)

    const [dataCart, setDataCart] = useState<Cart[] | null>(cart)

    

    

    return (
        <UserContext.Provider
            value={{user: data ,modalPicture,setModalPicture, setUser, cart: dataCart , setDataCart}  }
        >
            {children}
        </UserContext.Provider>
    );
};