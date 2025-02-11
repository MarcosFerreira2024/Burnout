import { Pencil, Truck } from 'lucide-react'
import React from 'react'

function ProfileButton({label="Alterar Dados",endereco=false, onClick}:{label?:string,endereco?:boolean,onClick:()=>void}) {
  return (
    <button title={label} onClick={onClick} className='globalShadow md:h-full sm:h-[50px] sm:w-full sm:max-w-fit   w-[34px] h-[34px] justify-center sm:justify-normal  items-center flex sm:py-5 sm:px-4 gap-2 focus-visible:outline-red-600 group focus-visible:bg-mainBg focus-visible:text-secundaryTitle  hover:bg-mainBg  text-mainTitle hover:text-secundaryTitle transition-all duration-300 ease-in-out md:text-buttonForm text-buttonFormMobile  text-nowrap  border-[2px] border-mainStroke  font-poppins   bg-secundaryBg rounded-md  '>
    <h1 className='sm:block hidden'>{label}</h1>
    {endereco? <Truck width={24} height={24} className="text-mainTitle md:max-w-full max-w-[16px] group-focus-visible:text-white group-hover:text-white" />:    <Pencil width={24} height={24} className="text-mainTitle md:max-w-full max-w-[16px] group-focus-visible:text-white group-hover:text-white"/>
  }
  </button>
  )
}

export default ProfileButton
