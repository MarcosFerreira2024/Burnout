"use server"
import { cookies } from "next/headers"
import ACTIONS from "../consts/Urls"

export const deleteProduct = async (id: string) => {
    try {
        const token = (await cookies()).get("token")
        if (!token) {
            throw new Error("Acesso Negado")
        }
        const response = await fetch(`${ACTIONS.produtos.deleteOne.productId(id)}`, {
            method: "DELETE",
            headers: {
                "Content-Type": "application/json",
                "authorization": `Bearer ${token.value}`
            },
        })

        const json = await response.json()


        if (response.status !== 200) throw new Error(json.message)

        return json
    } catch (e) {
        console.log(e)
        return

    }
}

type CreateProduct = {

    name: string,
    colorName: string,
    colorHex: string,
    frete: string,
    price: string,
    size: string[],
    category: string[],
    photo: string[]
}

export const createProduct = async (data: CreateProduct) => {
    try {
        const token = (await cookies()).get("token")
        if (!token) {
            throw new Error("Acesso Negado")
        }
        const response = await fetch(`${ACTIONS.produtos.create.url}`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "authorization": `Bearer ${token.value}`
            },
            body: JSON.stringify(data)
        })

        const json = await response.json()


        if (response.status !== 200) throw new Error(json.message)


        return json
    } catch (e) {
        return new Error(e.message)

    }
}

type UpdateProductInput = {
    name?: string,
    colorName?: string,
    colorHex?: string,
    frete?: string,
    price?: string,
    size?: string[],
    category?: string[],
    photo?: (string | {
        url: string;
        public_id: string;
    })[]
}

export const updateProduct = async (data: UpdateProductInput, id: string) => {
    try {
        const token = (await cookies()).get("token")
        const response = await fetch(`${ACTIONS.produtos.updateOne.productId(id)}`, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json",
                "Authorization": `Bearer ${token.value}`
            },
            body: JSON.stringify(data)
        })
        const json = await response.json()
        if (json instanceof Error) throw new Error(json.message)

        console.log(json, response.status)

        if (response.ok) return json

    } catch (e) {

        console.log(e)

    }
}   
