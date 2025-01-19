
import Link from 'next/link'
import React from 'react'
import { HomeCategories } from '../Types/Interfaces/Home'

function NavCategoriesButton({ref,text}:HomeCategories) {
  return (
    <>
     <Link href={ref} className='md:w-[100px] hover:bg-secundaryTitle border-[2px] border-mainStroke hover:text-mainBg ease-in-out duration-300 transition-all w-[70px] h-[70px] md:h-[100px] flex items-center globalShadow justify-center rounded-full text-subtitleMobile md:text-subtitle  bg-mainBg text-secundaryTitle font-poppins'>
       <h2>{text}</h2>
        
     </Link>
      
    </>
  )
}

export default NavCategoriesButton
