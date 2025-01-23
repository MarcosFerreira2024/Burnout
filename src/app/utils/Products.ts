import ACTIONS from "../consts/Urls"
import { Product } from "../Types/Interfaces/Produtos"

export async function getAllProducts(category: string) {

    const response = await fetch(`${ACTIONS.produtos.getAll.url}${category}`)
    const json = await response.json()

    console.log(json)
    return json as Product[]
}

export async function getOneProduct(id: string) {

    const response = await fetch(`${ACTIONS.produtos.getOne.url}/${id}`)

    const json = await response.json()

    console.log(json)

    return json as Product
}