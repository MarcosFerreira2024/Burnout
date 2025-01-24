"use client"

import React, { useContext } from 'react'
import { ComprasContext } from '../Contexts/ComprasContext'



function AvisoModal({produto}:{produto:string}) {
    const {aviso} = useContext(ComprasContext)
  return (
    <div className={`${aviso?"translate-y-0":"translate-y-[200px]"} bg-secundaryBg z-10 absolute bottom-20   md:bottom-5 right-5 transition-all duration-300 ease-in-out  font-poppins  rounded-lg globalShadow  border-[2px] border-mainStroke`}>
      <div className='flex flex-col gap-2  p-2 text-mainTitle'>
        <h2 className='text-lg'>Produto : <span>{produto}</span></h2>

        <p className='text-mainSubtitle text-sm'>Foi adicionado ao Carrinho</p>
        
    </div>

    </div>
  )
}

export default AvisoModal
