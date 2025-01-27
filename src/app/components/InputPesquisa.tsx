import React, { useContext } from 'react'
import { Search } from '../Types/Interfaces/Input'
import { NavContext } from '../Contexts/navBarContext'




function InputPesquisa({ref,type,placeholder,name,...props}:Search) {
  const {searchValue,setSearchValue} = useContext(NavContext)

  return (
    <>
        <input ref={ref} value={searchValue} onChange={(e) => setSearchValue(e.target.value)} {...props}  className='placeholder:text-searchMobile placeholder:md:text-search transition-all  focus:outline-red-600 focus:bg-secundarySubtitle focus:text-mainTitle focus:placeholder:text-mainTitle hover:bg-secundarySubtitle hover:placeholder:text-mainTitle text-secundaryTitle hover:text-mainTitle duration-300 ease-in-out   min-w-[100%] max-w-[400px] border-[2px] border-mainStroke p-2 font-poppins   placeholder:text-secundarySubtitle bg-mainBg rounded-md globalShadow ' type={type} name={name} placeholder={placeholder}  />
    </>
  )
}

export default InputPesquisa
