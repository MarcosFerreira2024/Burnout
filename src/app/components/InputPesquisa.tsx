import React, { useContext, useState } from 'react'
import { Search } from '../Types/Interfaces/Input'
import { NavContext } from '../Contexts/navBarContext'
import IconeLupa from './svg/IconeLupa'

function InputPesquisa({ ref, type, placeholder, name, ...props }: Search) {
  const { searchValue, setSearchValue, handleSearch } = useContext(NavContext)

  const [isFocused, setIsFocused] = useState(false)

  return (
    <div className="group  relative flex items-center">
      <input
      autoComplete='off'
        ref={ref}
        value={searchValue}
        onChange={(e) => setSearchValue(e.target.value)}
        {...props}
        onFocus={() => setIsFocused(true)} 
        onBlur={() => setIsFocused(false)}  
        className="focus-visible:outline-red-600 group focus-visible:bg-secundarySubtitle focus-visible:text-mainTitle focus-visible:placeholder:text-mainTitle placeholder:text-searchMobile md:placeholder:text-search transition-all group-hover:bg-secundarySubtitle group-hover:placeholder:text-mainTitle text-secundaryTitle group-hover:text-mainTitle duration-300 ease-in-out w-full max-w-[400px] border-[2px] border-mainStroke p-2 font-poppins placeholder:text-secundarySubtitle bg-mainBg rounded-md globalShadow"
        type={type}
        name={name}
        placeholder={placeholder}
      />
      <IconeLupa
        onClick={(e)=>{

          handleSearch(e)
          setIsFocused(false)
        }
        }
        width={20}
        height={20}
        className={`absolute group-hover:rotate-[10deg] transition-transform duration-150 ease-linear stroke-white group-hover:stroke-mainBg right-2 ${
          isFocused ? 'stroke-mainBg' : 'stroke-white'
        }`}
      />
    </div>
  )
}

export default InputPesquisa