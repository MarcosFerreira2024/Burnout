import { SlidersHorizontal } from 'lucide-react'
import React from 'react'

function FilterButton() {
  return (
    <button className='globalShadow flex py-5 px-2 gap-2 focus-visible:outline-red-600 group focus-visible:bg-secundarySubtitle focus-visible:text-mainTitle  hover:bg-secundarySubtitle  text-secundaryTitle hover:text-mainTitle transition-all duration-300 ease-in-out text-buttonForm    border-[2px] border-mainStroke  font-poppins   bg-mainBg rounded-md  '>
      <h1>Filtros Avançados</h1>
      <SlidersHorizontal width={24} height={24} className="text-white md:max-w-full max-w-[16px] group-focus-visible:text-mainTitle group-hover:text-mainTitle"/>
    </button>
  )
}

export default FilterButton
