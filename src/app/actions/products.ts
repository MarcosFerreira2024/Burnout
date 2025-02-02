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
    }
}