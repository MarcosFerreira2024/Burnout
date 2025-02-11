"use client"
import React, { useContext, useState } from 'react'
import Input from './Input'
import { UserContext } from '../Contexts/UserContext'




function AlterarDados() {

    const {user} = useContext(UserContext)

    const [name,setName] = useState(user.name)

    const [email,setEmail] = useState(user.email)

    const [celular,setCelular] = useState(user.phone?user.phone:"")

    const [cpf,setCpf] = useState(user.cpf?user.cpf:"")

    const [nascimento,setNascimento] = useState(user.birthDate?user.birthDate:"")



    const inputs = [
        {
            name:"name",
            value:name,
            type:"text",
            onChange:(e:React.ChangeEvent<HTMLInputElement>)=>setName(e.target.value),
            placeholder:"Digite seu Nome Completo :",
            id:"name",
            label:"Nome Completo :"
        }
        ,
        {
            name:"email",
            value:email,
            type:"email",
            onChange:(e:React.ChangeEvent<HTMLInputElement>)=>setEmail(e.target.value),
            placeholder:"Digite seu novo Email",
            id:"email",
            label:"Email :"
        },
        {
            name:"Celular",
            value:celular,
            type:"text",
            onChange:(e:React.ChangeEvent<HTMLInputElement>)=>setCelular(e.target.value),
            placeholder:"Digite seu Celular",
            id:"celular",
            label:"Celular :"
        },
        {
            name:"cpf",
            value:cpf,
            type:"text",
            onChange:(e:React.ChangeEvent<HTMLInputElement>)=>setCpf(e.target.value),
            placeholder:"Digite seu CPF",
            id:"cpf",
            label:"CPF :"
        },
        {
            name:"nascimento",
            value:nascimento,
            type:"date",
            onChange:(e:React.ChangeEvent<HTMLInputElement>)=>setNascimento(e.target.value),
            placeholder:"Coloque a sua Data de Nascimento",
            id:"nascimento",
            label:"Data de Nascimento :"
        }
    ]



  return (
    <div className=' flex flex-col gap-5 bg-white globalShadow p-5  rounded-md border-[1px] border-[#eeeeee]'>
        {inputs.map((input,index)=>(<Input key={index} classes='min-w-full py-5' {...input} />))}
       
    </div>
  )
}

export default AlterarDados
