"use client"
import { useFormStatus } from "react-dom"
import Button from "./Button"

export function FormButton({labelEnvio,labelPadrao}:{labelEnvio:string,labelPadrao:string}) {
    const {pending} = useFormStatus()
  
    return <Button classes="max-w-[125px] sm:w-[200px]" disabled={pending} label={`${pending?labelEnvio:labelPadrao}`}/>
}