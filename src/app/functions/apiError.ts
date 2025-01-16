export function ErrorMessage(e: unknown) {
    if (e instanceof Error) {
        return {
            ok: false,
            error: e.message,
            data: null
        }
    }
}