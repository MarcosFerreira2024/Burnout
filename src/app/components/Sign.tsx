"use client"

import Input from './Input'
import Link from 'next/link'
import { useActionState, useContext, useEffect, useRef } from 'react'
import { sign } from '../actions/sign'
import Message from './Message'
import { FormButton } from './FormButton'
import { LoginContext } from '../Contexts/LoginContext'
import { redirect } from 'next/navigation'


function Sign() {
    const [state,action] = useActionState(sign, {
      ok: false,
      error:"",
      data:null,
      name:""
    })

    const inputRef = useRef(null)
    const {setShowActivationModal} = useContext(LoginContext)

    useEffect(()=>{
        if(state.ok){
          localStorage.setItem("name",JSON.stringify(state.name))
          setShowActivationModal(true)
          redirect("/login")
        }
        
        if(state.error.includes("Verifique")){
          setShowActivationModal(true)
          redirect("/login")
        }
    

    },[state.ok,state.name,setShowActivationModal,state.error])

  return (
    <div className='px-2 md:px-0' >
      <h1 className='text-title font-alex text-mainTitle self-start max-w-[400px] '>Registre-se</h1>
      <form action={action} className='gap-5 flex flex-col'>
        <Input  ref={inputRef} type={"email"} id={"email"} label={"Email :"} name={"email"} placeholder={"Digite seu Email :"}/>
        <Input  type={"text"} id={"nome"} label={"Nome :"} name={"name"} placeholder={"Digite seu Nome :"}/>
        <Input type='password' inputPassword={true}  id={"password"} label={"Senha :"} name={"password"} placeholder={"Digite sua Senha :"}/>
        <Input type='password' inputPassword={true} id={"confirmPassword"} label={"Confirme a Senha :"} name={"confirmPassword"} placeholder={"Confirme sua Senha :"}/>        

        <div className='flex max-w-[400px]    text-right  justify-between'>
            
            <FormButton labelEnvio='Cadastrando...' labelPadrao='Cadastrar'  />
            <h1 className='text-linkForm text-mainSubtitle min-w-[16ch] max-w-[21ch] font-poppins'>já possui uma conta ? <Link href={"/login"} className='underline'>Entrar</Link></h1>
        </div>
        {state.error?<Message error={state.error}/>:null}

      </form>
    </div>
  )
}

export default Sign
