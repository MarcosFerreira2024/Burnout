import { Pencil } from 'lucide-react'
import React from 'react'

function ProfileButton() {
  return (
    <button className='globalShadow md:h-full h-[50px]  items-center flex py-5 px-4 gap-2 focus:outline-red-600 group focus:bg-mainBg focus:text-secundaryTitle  hover:bg-mainBg  text-mainBg hover:text-secundaryTitle transition-all duration-300 ease-in-out md:text-buttonForm text-buttonFormMobile  text-nowrap  border-[2px] border-mainStroke  font-poppins   bg-secundaryBg rounded-md  '>
    <h1>Alterar Dados</h1>
    <Pencil width={24} height={24} className="text-mainBg md:max-w-full max-w-[16px] group-focus:text-white group-hover:text-white"/>
  </button>
  )
}

export default ProfileButton
