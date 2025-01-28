"use client"

import React, { useContext } from 'react'
import { NavContext } from '../Contexts/navBarContext'


export interface HomeCategories {
  text: string,
  ref?:string
}
function NavCategoriesButton({text}:HomeCategories) {

  const {handleModal,modalCategories,modalPesquisa,showModalCategories,showModalPesquisa} = useContext(NavContext)

   return (
    <>
     <div title={text} onClick={()=> handleModal(modalCategories,showModalCategories,modalPesquisa,showModalPesquisa)} className='md:w-[100px] select-none  hover:bg-secundaryTitle border-[2px] border-mainStroke hover:text-mainTitle ease-in-out duration-300 transition-all w-[70px] h-[70px] md:h-[100px] flex items-center globalShadow justify-center rounded-full text-subtitleMobile md:text-subtitle  bg-mainBg text-secundaryTitle font-poppins'>
       <h2>{text}</h2>
        
     </div>
      
    </>
  )
}

export default NavCategoriesButton
