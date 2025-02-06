
import { Product } from "../actions/cart"
import ACTIONS from "../consts/Urls"


export type InfoProducts = {
    produtos: Product[],
    totalPages: number,
    totalProducts: number

}

export const getAllProducts = async ([url, category, page]) => {

    console.log(`${url}${category}&page=${page as number}`)

    try {
        const response = await fetch(`${url}${category}&page=${page as number}`)
        const json = await response.json()

        if (response.status !== 200) throw new Error


        console.log(json)
        return json as InfoProducts

    }
    catch (e) {
        console.log(e)
    }
}

export const getAllProductsAdmin = async ([url, page]) => {
    try {
        const response = await fetch(`${url}&page=${page as number}`)
        const json = await response.json()

        if (response.status !== 200) throw new Error

        console.log(json)
        return json as InfoProducts
    }
    catch (e) {
        console.log(e)
    }
}




export const getOneProduct = async (id: string) => {
    try {
        const response = await fetch(`${ACTIONS.produtos.getOne.url}/${id}`)

        const json = await response.json()

        if (response.status !== 200) return new Error("Produto nao encontrado")

        return json as Product
    }
    catch (e) {
        console.log(e)
        return
    }
}