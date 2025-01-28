import React, { useContext } from 'react'
import { NavContext } from '../Contexts/navBarContext'
import Categories from './Categories'

function ModalCategories() {
  const {modalCategories,closeAllModais} =useContext(NavContext)
  return (
    <>
        <aside className={`${modalCategories?"sm:translate-x-[77px] translate-y-[60px] sm:translate-y-0  translate-x-[0px] ": "sm:translate-y-0 translate-y-[60px]  translate-x-[-300px] sm:translate-x-[-228px]"} z-20  globalShadow sm:rounded-tr-md min-h-[calc(100vh-60px)]  sm:w-[300px] sm:min-h-[100%] transition-all ease-in-out duration-700  border-[1px] border-mainStroke   bg-mainBg       fixed`}>
          <Categories />
        </aside> 
        {modalCategories?<div className=' z-10 fixed w-[100%] h-[100%] 'onTouchStart={closeAllModais}  onClick={closeAllModais}>
      
        </div> :null}
    
    
    
    </>
  )
}


export default ModalCategories
