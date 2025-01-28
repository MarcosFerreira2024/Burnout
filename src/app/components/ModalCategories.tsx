import React, { useContext } from 'react'
import { NavContext } from '../Contexts/navBarContext'
import Categories from './Categories'

function ModalCategories() {
  const {modalCategories,closeAllModais} =useContext(NavContext)
  return (
    <>
        <aside className={`${modalCategories?"translate-x-[77px]    ": " translate-x-[-228px]"} z-20  globalShadow rounded-tr-md   w-[300px] min-h-[100%] transition-all ease-in-out duration-700  border-[1px] border-mainStroke   bg-mainBg       fixed`}>
          <Categories />
        </aside> 
        {modalCategories?<div className=' z-10 fixed w-[100%] h-[100%] 'onTouchStart={closeAllModais}  onClick={closeAllModais}>
      
        </div> :null}
    
    
    
    </>
  )
}


export default ModalCategories
