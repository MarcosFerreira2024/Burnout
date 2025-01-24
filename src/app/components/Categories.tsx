import React from 'react'
import { Departamentos } from '../data/FooterData'
import Link from 'next/link'
import { LucideMoveUpRight } from 'lucide-react'

function Categories() {
  return (
    <ul className='w-[100%] px-5 flex flex-col gap-5 pt-5'>
        
        {Departamentos.map((departamento,i)=> (
        <li key={i} >
            <Link href={departamento.ref} className='border-[2px] focus:outline-red-600 focus:bg-secundarySubtitle focus:text-mainTitle rounded-md flex items-center justify-between text-secundaryTitle font-poppins group border-mainStroke globalShadow  text-nowrap hover:bg-secundaryTitle hover:text-mainTitle ease-in-out duration-300 transition-all   '>
                <h1 className='ml-[10px] py-2 text-categoriesMobile md:text-categories'>{departamento.name}</h1>
                <LucideMoveUpRight width={24} height={24}  className='md:max-w-full max-w-[16px] group-focus:text-mainTitle text-secundaryTitle mr-[10px] group-hover:text-mainTitle' />
            </Link>
        </li>

        ))}

  </ul>
  )
}

export default Categories
