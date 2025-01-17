"use server"
import { cookies } from "next/headers"
import ACTIONS from "../consts/Urls"

export async function code(state: { ok: boolean, error: string, data: string | null }, formData: FormData) {

    try {
        const code = formData.get("code")

        const response = await fetch(`${ACTIONS.code.url}`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({ code })
        })
        const json = await response.json()

        if (response.status !== 200) throw new Error(json.message)

        if (json.token) {
            const cookieStore = await cookies()
            cookieStore.set("token", json.token, {
                httpOnly: true,
                secure: true,
                sameSite: "strict",
                maxAge: 60 * 60 * 24 * 30
            })


            return state = { data: "", ok: true, error: "", }
        }
        return state = { data: null, ok: false, error: json.message }

    } catch (e) {
        if (e instanceof Error) {
            return state = { data: null, ok: false, error: e.message }
        }
        return state = { data: null, ok: false, error: "Ocorreu um Erro inesperado" }
    }
}