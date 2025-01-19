"use client"
import React from 'react'
import { HomeCategories } from '../Types/Interfaces/Home'
import { ChevronLeft, ChevronRight, } from 'lucide-react'
import NavCategoriesButton from './NavCategoriesButton'

function NavCategories({ dados }: { dados: HomeCategories[] }) {
  return (
      <div  className='mx-auto w-full   mt-3 md:mt-5 max-w-[1440px]     overflow-x-scroll scrollbar-hide  '>
            <div className='gap-2 mb-0 md:mb-2 flex items-center justify-end min-w-[100%]'>
              <div className='bg-mainBg  rounded-full globalShadow border-[2px] border-mainStroke'><ChevronLeft width={24} height={24} className='text-secundaryTitle md:w-[24px] md:h-[24px] w-[20px] h-[20px] '/></div>
              <div className='bg-mainBg  rounded-full globalShadow border-[2px] border-mainStroke'><ChevronRight width={24} height={24} className='text-secundaryTitle md:w-[24px] md:h-[24px] w-[20px] h-[20px]'/></div>


            </div>
            <div className='flex    '>

              {dados.map((item,i)=> (
                      <nav key={i} className='md:min-w-[155px] min-w-[110px] my-1'>
                        <NavCategoriesButton ref={item.ref} text={item.text} />
                      </nav>
              ))}


            </div>
              
     </div>
  )
}

export default NavCategories