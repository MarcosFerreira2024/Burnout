"use client"

import React, { useActionState, useContext, useEffect, useRef, useState } from 'react'
import Input from './Input'
import Link from 'next/link'
import login from '../actions/login'
import Message from './Message'
import { LoginContext } from '../Contexts/LoginContext'
import { FormButton } from './FormButton'
import ActivationModal from './ActivationModal'
import { redirect } from 'next/navigation'
import { getUser } from '../actions/user'








function Login() {

  const inputRef = useRef(null)



  const [state,action] = useActionState(login, {
    ok: false,
    error: "",
    data: null,
  })


  const {setShowActivationModal,showActivationModal} = useContext(LoginContext)
  const [submit,setSubmit] = useState(false)


  useEffect(()=>{

    async function checkUser() {
      const user = await getUser()
      if(user instanceof Error) return
      if(user.status === true) redirect("/home")
    }
    checkUser()
    
    if(submit === true){
      if(state.error &&state.error.includes("Verifique")){
        setSubmit(false)
        setShowActivationModal(true)
        return
      }
      inputRef.current.focus()
    }
    if(state.ok)redirect("/home")

  },[state.error,state.ok,setShowActivationModal,setSubmit,submit])
  return (
    <div className='px-2 md:px-0' >
      <h1 className='text-title font-alex text-mainTitle  self-start max-w-[400px] '>Entrar</h1>

      {showActivationModal?<ActivationModal  />:null}
      <form onSubmit={()=>setSubmit(true)} action={action} className='gap-5 flex flex-col'>
        <Input  ref={inputRef} type={"email"} id={"email"} label={"Email :"} name={"email"} placeholder={"Digite seu Email :"}/>
        <Input inputPassword={true} type='password' id={"password"} label={"Senha :"} name={"password"} placeholder={"Digite sua Senha :"}/>
        <div className='flex max-w-[400px]    text-right  justify-between'>

            <FormButton labelEnvio='Entrando...' labelPadrao='Entrar' />
            <h1 className='text-linkText text-mainSubtitle min-w-[16ch] max-w-[21ch] font-poppins'>Ainda não possui conta ? <Link href={"/signup"} className='underline'>Registre-se</Link></h1>
        </div>
        {state.error?<Message error={state.error}/>:null}
      </form>
    </div>
  )
}

export default Login
