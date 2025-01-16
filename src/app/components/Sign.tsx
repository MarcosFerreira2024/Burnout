"use client"

import Input from './Input'
import Link from 'next/link'
import { useEffect, useRef } from 'react'
import ButtonLoginSign from './FormButton'
import { useFormStatus } from 'react-dom'

function FormButton(){
  const {pending} = useFormStatus()

  return <ButtonLoginSign disabled={pending} label={`${pending?"Cadastrando...":"Cadastrar"}`}/>
}
function Sign() {
    const inputRef = useRef(null)
  
    useEffect(()=>{
      inputRef.current.focus()
    },[])
  return (
    <div className='px-2 md:px-0' >
      <h1 className='text-title font-alex text-mainTitle self-start max-w-[400px] '>Registre-se</h1>
      <form className='gap-5 flex flex-col'>
        <Input  ref={inputRef} type={"email"} id={"email"} label={"Email :"} name={"email"} placeholder={"Digite seu Email :"}/>
        <Input  type={"text"} id={"nome"} label={"Nome :"} name={"nome"} placeholder={"Digite seu Nome :"}/>
        <Input type='password' inputPassword={true}  id={"password"} label={"Senha :"} name={"password"} placeholder={"Digite sua Senha :"}/>
        <Input type='password' inputPassword={true} id={"confirmPassword"} label={"Confirme a Senha :"} name={"confirmPassword"} placeholder={"Confirme sua Senha :"}/>        

        <div className='flex max-w-[400px]    text-right  justify-between'>
            <FormButton/>
            <h1 className='text-linkForm text-mainSubtitle min-w-[16ch] max-w-[21ch] font-poppins'>já possui uma conta ? <Link href={"/login"} className='underline'>Entrar</Link></h1>
        </div>

      </form>
    </div>
  )
}

export default Sign
