"use server"
import { cookies } from "next/headers";
import ACTIONS from "../consts/Urls";
import { redirect } from "next/navigation";

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
                    "Authorization": `Bearer ${token.value}`
                }
            })
            if (response.status !== 200) {
                (await cookies()).delete("token")
                redirect("/login")
            }

            const json = await response.json() as User


            return json
        }
        redirect("/login")


    } catch (e) {
        if (e instanceof Error) {
            console.log(e.message)
        }
    }


}


export const updateUser = async (url: string) => {


    try {
        const token = (await cookies()).get("token")

        if (!url) throw new Error("URL não encontrada")

        const response = await fetch(ACTIONS.user.update.url, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json",
                "Authorization": `Bearer ${token.value}`
            },
            body: JSON.stringify({
                photo: url
            })
        })


        const json = await response.json()

        return json



    } catch (e) {
        console.log(e)
        return

    }
}