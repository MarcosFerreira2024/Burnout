"use client"

import React, { useActionState, useEffect, useRef } from 'react'
import Input from './Input'
import Link from 'next/link'
import login from '../actions/login'
import ButtonLoginSign from './FormButton'
import { useFormStatus } from 'react-dom'




function FormButton(){
  const {pending} = useFormStatus()

  return <ButtonLoginSign disabled={pending} label={`${pending?"Enviando...":"Entrar"}`}/>
}

function Login() {
  const inputRef = useRef(null)

  useEffect(()=>{
    inputRef.current.focus()
  },[])


  const [state,action] = useActionState(login, {
    ok: false,
    error: "",
    data: null
  })

  useEffect(() => {
    if (state.ok) window.location.href = "/home"
  },[state.ok])

  

  return (
    <div className='px-2 md:px-0' >
      <h1 className='text-title font-alex text-mainTitle self-start max-w-[400px] '>Entrar</h1>

      <form action={action} className='gap-5 flex flex-col'>
        <Input  ref={inputRef} type={"email"} id={"email"} label={"Email :"} name={"email"} placeholder={"Digite seu Email :"}/>
        <Input inputPassword={true} type='password' id={"password"} label={"Senha :"} name={"password"} placeholder={"Digite sua Senha :"}/>
        <div className='flex max-w-[400px]    text-right  justify-between'>
            <FormButton/>
            <h1 className='text-linkForm text-mainSubtitle min-w-[16ch] max-w-[21ch] font-poppins'>Ainda não possui conta ? <Link href={"/sign"} className='underline'>Registre-se</Link></h1>
        </div>
        <p className='text-mainSubtitle'>{state.error}</p>

      </form>
    </div>
  )
}

export default Login
