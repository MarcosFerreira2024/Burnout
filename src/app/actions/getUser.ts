"use server"
import { cookies } from "next/headers";
import ACTIONS from "../consts/Urls";

export type User = {
    id: string,
    name: string,
    photo: string | null,
    password: string,
    role: string,
    status: boolean,
    email: string,
    carrinho: {
        id: string,
        userId: string,
        cartItem: []
    },
    fav: [],
    avaliacoes: [],
    comments: [],
    code: string | null
}

export async function getUser() {
    try {
        const token = (await cookies()).get("token")

        if (token) {
            const response = await fetch(`${ACTIONS.user.getOne.url}`, {
                method: "GET",
                headers: {
                    "Content-Type": "application/json",
                    "Authorization": `Bearer ${token?.value}`
                }
            })
            if (response.status !== 200) {
                (await cookies()).delete("token")
                throw new Error("Usuário não foi encontrado")
            }

            const json = await response.json() as User



            return json as User
        }
        throw new Error("Sem Token")


    } catch (e) {
        if (e instanceof Error) {
            return new Error(e.message)
        }
    }


}


