"use client"
import { useFormStatus } from "react-dom"
import ButtonLoginSign from "./ButtonLoginSign"

export function FormButton({labelEnvio,labelPadrao}:{labelEnvio:string,labelPadrao:string}) {
    const {pending} = useFormStatus()
  
    return <ButtonLoginSign disabled={pending} label={`${pending?labelEnvio:labelPadrao}`}/>
}