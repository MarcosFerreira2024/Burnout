"use client"
import { EyeIcon, EyeOffIcon } from 'lucide-react'
import React, { useState } from 'react'

function InputPassword({id,label,placeholder,name}) {
    const [showPassword,setShowPassword] = useState(false)
  return (
    <div className='flex gap-1 flex-col '>
      <div className='flex self-start items-center gap-2'>
        <label className='text-label text-mainTitle font-poppins ' htmlFor={id}>{label}</label>
        {showPassword?<EyeOffIcon  strokeWidth={1} className='cursor-pointer' onClick={() => setShowPassword(false)} width={24} color='#B91C1C'/> :<EyeIcon strokeWidth={1}  className='cursor-pointer' onClick={() => setShowPassword(true)} width={24} color='#B91C1C'/>}
      </div>
      <input className='placeholder:text-placeholder transition-all  focus:outline-red-600 focus:bg-secundarySubtitle focus:text-mainTitle focus:placeholder:text-mainTitle hover:bg-secundarySubtitle hover:placeholder:text-mainTitle text-secundaryTitle hover:text-mainTitle duration-300 ease-in-out inner drop min-w-[100%] max-w-[400px] border-[2px] border-mainStroke p-2 font-poppins   placeholder:text-secundarySubtitle bg-mainBg rounded-md  ' type={`${showPassword?"text":"password" }`} id={id} name={name} placeholder={placeholder} required />
    </div>
  )
}

export default InputPassword
