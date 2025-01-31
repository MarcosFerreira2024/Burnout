"use server"
import { cookies } from "next/headers"
import ACTIONS from "../consts/Urls"
import { getUser } from "./getUser"

export type Cart = {
    quantity: number,
    product: Product

}

export type Product = {
    id: string,
    name: string,
    price: string,
    frete: string,
    photo: string[],
    rating: number,
    favorito: boolean,
    size: string[],
    category: string[],
    colorName: string,
    colorHex: string,
    createdAt: string,
    updatedAt: string
}


export const getCart = async () => {
    try {
        const user = await getUser()
        const token = (await cookies()).get("token")
        if (user instanceof Error) throw new Error(user.message)



        const response = await fetch(`${ACTIONS.cart.getAll.userId(user.id)}`, {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
                "Authorization": `Bearer ${token.value}`
            },
        })
        const json = await response.json()
        return json as Cart[]

    }
    catch (e) {
        console.log(e)
    }
}

export const addProductToCart = async (id: string) => {
    try {
        const user = await getUser()
        const token = (await cookies()).get("token")
        if (user instanceof Error) throw new Error(user.message)
        const response = await fetch(`${ACTIONS.cart.addProduct.userAndProduct(user.id, id)}`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "Authorization": `Bearer ${token.value}`
            },

        })
        const json = await response.json()
        if (response.status !== 200) throw new Error(json.message)
        return json
    } catch (e) {
        console.log(e)
    }

}

export const removeProductFromCart = async (id: string) => {
    try {
        const user = await getUser()
        const token = (await cookies()).get("token")
        if (user instanceof Error) throw new Error(user.message)
        const response = await fetch(`${ACTIONS.cart.deleteProduct.userAndProduct(user.id, id)}`, {
            method: "DELETE",
            headers: {
                "Content-Type": "application/json",
                "Authorization": `Bearer ${token.value}`
            },

        })
        const json = await response.json()
        if (response.status !== 200) throw new Error(json.message)
        return json
    } catch (e) {
        console.log(e)
    }

}