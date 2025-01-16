import Image from 'next/image'
import React, { ComponentPropsWithRef } from 'react'

interface NavButton{
    label:string,
    src:string,
    alt:string,
    perfil:boolean
    props?:ComponentPropsWithRef<"button">
}

function NavButton({label,src="/ui/perfil.svg",alt,perfil,...props}:NavButton) {

    
  return (
    <button {...props} className='flex outline-mainSubtitle  hover:opacity-90 hover:bg-mainStroke transition-opacity  ease-in-out duration-300 border-[1px] border-mainStroke gap-2 justify-center xl:justify-normal font-poppins py-1 xl:pl-2 max-h-[32px] items-center bg-mainBg inner drop rounded-md   w-[32px] xl:w-[160px] '>
      <Image width={24} height={24} title={alt} className={`${perfil?"rounded-full bg-mainBg object-cover":""}`} src={src} alt={alt}/>
      <p className='text-secundaryTitle text-subtitle xl:block hidden'>{label}</p>
    </button>
  )
}

export default NavButton
