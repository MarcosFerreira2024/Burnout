"use server"
import ACTIONS from "../consts/Urls"
import { ErrorMessage } from "../functions/apiError"

export async function sign(state: { name: string, ok: boolean, error: string, data: string | null }, formData: FormData) {

    try {
        const email = formData.get("email")
        const password = formData.get("password")
        const confirmPassword = formData.get("confirmPassword")
        const name = formData.get("name")

        const response = await fetch(`${ACTIONS.sign.url}`, {
            method: "POST",
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ email, password, confirmPassword, name })
        })
        const json = await response.json() as { message: string }

        if (response.status !== 200) {
            if (json && json.message.includes("Verifique")) state = { data: null, name: name.toString().split(" ")[0].charAt(0).toLocaleUpperCase() + name.toString().split(" ")[0].slice(1), error: json.message, ok: false }

            throw new Error(json.message)
        }
        return {
            data: json.message,
            ok: true,
            name: name.toString().split(" ")[0].charAt(0).toLocaleUpperCase() + name.toString().split(" ")[0].slice(1),
            error: ""
        }



    } catch (e) {

        return state = { ...state, error: ErrorMessage(e) }
    }

}