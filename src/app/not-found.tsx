"use client"
import React from 'react'
export default function notFound() {
  return (
    <div className=' min-h-[100vh] min-w-[100vw] flex text-center  flex-col items-center justify-center'>
            <h1 className='xl:text-title text-3xl sm:text-titleMobile text-mainTitle font-poppins min-w-[12ch] sm:text-nowrap' > Página Não Foi Encontrada</h1>
            <p className='text-subtitle mt-2 mb-5 text-mainSubtitle font-poppins'>Essa URL não existe</p>
            <button aria-live='polite' aria-label='Voltar' title='Voltar para página anterior' onClick={() => history.back()} className='rounded-md hover:bg-secundaryBg hover:text-mainTitle ease-in-out duration-300 transition-all focus-visible:outline-red-600 focus-visible:bg-secundaryBg focus-visible:text-mainTitle border-[2px] border-mainStroke globalShadow px-10 py-2 bg-mainBg text-buttonForm text-secundaryTitle font-poppins'>Voltar</button>
    </div>
  )
}

 