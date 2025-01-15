"use client"

import Input from './Input'
import FormButton from './FormButton'
import Link from 'next/link'
import InputPassword from './InputPassword'

function Sign() {

  return (
    <div className='px-2 md:px-0' >
      <h1 className='text-title font-alex text-mainTitle self-start max-w-[400px] '>Registre-se</h1>

      <form className='gap-5 flex flex-col'>
        <Input type={"email"} id={"email"} label={"Email :"} name={"email"} placeholder={"Digite seu Email :"}/>
        <Input type={"text"} id={"nome"} label={"Nome :"} name={"nome"} placeholder={"Digite seu Nome :"}/>
        <InputPassword  id={"password"} label={"Senha :"} name={"password"} placeholder={"Digite sua Senha :"}/>
        <InputPassword  id={"confirmPassword"} label={"Confirme a Senha :"} name={"confirmPassword"} placeholder={"Confirme sua Senha :"}/>        

        <div className='flex max-w-[400px]    text-right  justify-between'>
            <FormButton label={"Entrar"}/>
            <h1 className='text-linkForm text-mainSubtitle min-w-[16ch] max-w-[21ch] font-poppins'>já possui uma conta ? <Link href={"/login"} className='underline'>Entrar</Link></h1>
        </div>

      </form>
    </div>
  )
}

export default Sign
