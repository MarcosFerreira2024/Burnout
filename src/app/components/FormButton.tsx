"use client"
import { useFormStatus } from "react-dom"
import Button from "./Button"

export function FormButton({labelEnvio,labelPadrao,classes,disabled,version=2}:{disabled?:boolean,version?:number,classes?:string,labelEnvio:string,labelPadrao:string}) {
    const {pending} = useFormStatus()
  
    return <Button  version={version} classes={classes?classes :"max-w-[125px] min-w-[125px]  w-full sm:min-w-[200px] sm:max-w-[200px] self-center"} disabled={pending || disabled } label={`${pending?labelEnvio:labelPadrao}`}/>
}