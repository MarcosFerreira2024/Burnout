"use server"

import { cookies } from "next/headers"
import ACTIONS from "../consts/Urls"
import { ErrorMessage } from "../functions/apiError"

export default async function login(state: { ok: boolean, error: string, data: string | null }, formData: FormData) {
    const email = formData.get("email") as string
    const password = formData.get("password") as string

    try {
        if (!email && !password) throw new Error("Preencha todos os campos")

        const res = await fetch(ACTIONS.login.url, {
            method: "POST",
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ email, password })
        })
        const json = await res.json()
        if (res.status !== 200) {
            throw new Error(json.message)
        }
        if (json.token) {
            const cookieStore = await cookies()
            cookieStore.set("token", json.token, {
                httpOnly: true,
                secure: true,
                sameSite: "strict",
                maxAge: 60 * 60 * 24 * 30
            })


            return { data: null, ok: true, error: "", }
        }


    } catch (e) {
        if (e instanceof Error && e.message.includes("Código necessário")) {

            return { ok: false, error: "Verifique Seu Email", data: null };
        }
        return { ...state, error: ErrorMessage(e) }
    }
}