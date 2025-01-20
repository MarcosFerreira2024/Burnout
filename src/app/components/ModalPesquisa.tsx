import React, { useContext } from 'react'
import InputPesquisa from './InputPesquisa'
import { NavContext } from '../Contexts/navBarContext'

function ModalPesquisa() {
    const {modalPesquisa} =useContext(NavContext)
  return (
    <aside className={`${modalPesquisa?"translate-x-[77px]    ": " translate-x-[-228px]"} z-20  globalShadow rounded-tr-md   w-[300px] min-h-[100%] transition-all ease-in-out duration-700  border-[1px] border-mainStroke   bg-mainBg       fixed`}>
        <div className='w-[100%] px-5 pt-5'>
            <InputPesquisa name='search' ref={null} placeholder='Pesquisar' type='search'   />
        
        </div>    
    </aside> 
  )
}

export default ModalPesquisa
