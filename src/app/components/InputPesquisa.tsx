import React from 'react'
import { Search } from '../Types/Interfaces/Input'



function InputPesquisa({ref,type,placeholder,name,...props}:Search) {
  return (
    <div>
        <input ref={ref} {...props} className='placeholder:text-placeholderMobile placeholder:md:text-placeholder transition-all  focus:outline-red-600 focus:bg-secundarySubtitle focus:text-mainTitle focus:placeholder:text-mainTitle hover:bg-secundarySubtitle hover:placeholder:text-mainTitle text-secundaryTitle hover:text-mainTitle duration-300 ease-in-out   min-w-[100%] max-w-[400px] border-[2px] border-mainStroke p-2 font-poppins   placeholder:text-secundarySubtitle bg-mainBg rounded-md globalShadow ' type={type} name={name} placeholder={placeholder}  />
    </div>
  )
}

export default InputPesquisa
