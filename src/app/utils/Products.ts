import ACTIONS from "../consts/Urls"
import { Product } from "../Types/Interfaces/Produtos"

export const getAllProducts = async ([url, category]) => {

    try {
        const response = await fetch(`${url}${category}`)
        const json = await response.json()

        if (response.status !== 200) throw new Error


        return json as Product[]
    }
    catch (e) {
        console.log(e)
    }
}

export const getAllProductsAdmin = async (url: string) => {
    try {
        const response = await fetch(`${url}`)
        const json = await response.json()

        if (response.status !== 200) throw new Error


        return json as Product[]
    }
    catch (e) {
        console.log(e)
    }
}



export const getOneProduct = async (id: string) => {
    try {
        const response = await fetch(`${ACTIONS.produtos.getOne.url}/${id}`)

        const json = await response.json()

        if (response.status !== 200) throw new Error


        return json as Product
    }
    catch (e) {
        console.log(e)
    }
}