"use client"
import React, { useActionState, useContext, useEffect, useRef, useState } from 'react'
import Input from './Input'
import { LoginContext } from '../Contexts/LoginContext'
import { FormButton } from './FormButton'
import { code } from '../actions/code'
import { redirect } from 'next/navigation'





function ActivationModal() {

    const ref = useRef(null)
    const [name,setName] = useState("")
    useEffect(()=>{
        ref.current.focus()
        setName(JSON.parse(localStorage.getItem("name")))

        
        
    },[])
    const {setShowActivationModal,showActivationModal} = useContext(LoginContext)

    const [state,action] = useActionState(code, {
        ok: false,
        error: "",
        data: null,
      
    })
    useEffect(()=>{
        if(state.ok){
            setShowActivationModal(false)
            redirect("/login")
        }
    },[state.ok,setShowActivationModal])

  return (
    <div onClick={()=> setShowActivationModal(!showActivationModal)} className='min-w-[100vw]  flex justify-center items-center  h-[100vh] fixed left-0 top-0 0 z-10 bg-black/20'>

        <div onClick={(e) => e.stopPropagation()} className='p-5 rounded-md flex flex-col justify-between gap-10 bg-secundaryBg globalShadow  absolute '>
                <div>
                    <h1 className='text-titleMobile md:text-title md:text-left text-center font-alex text-mainTitle'>{name}, Seja Bem Vindo</h1>
                    <div className='w-[full] h-[2px] bg-mainBg globalShadow '></div>
                </div>

            <form action={action} className='flex-col gap-5 flex'>
                <Input ref={ref} id='code' label='Código de Ativação :' name='code' placeholder='Insira o código que foi enviado ao seu Email' type='text' />
                <FormButton labelEnvio={"Enviando..."} labelPadrao={"Enviar"} />
            </form>
        </div>
      
    </div>
  )
}

export default ActivationModal
