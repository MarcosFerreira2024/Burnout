"use client"
import React, { useContext} from 'react'
import InputPesquisa from './InputPesquisa'
import { NavContext } from '../Contexts/navBarContext'
import { Trash2, X } from 'lucide-react'
import Link from 'next/link'

function ModalPesquisa() {
    const {modalPesquisa,closeAllModais,showModalPesquisa,setModais,handleDeleteSearch,handleSearch,setPesquisas,pesquisas} = useContext(NavContext)




    

  return (
  <>
      <aside className={`${modalPesquisa?"translate-x-[77px]    ": " translate-x-[-228px]"} z-20  globalShadow rounded-tr-md   w-[300px] min-h-[100%] transition-all ease-in-out duration-700  border-[1px] border-mainStroke   bg-mainBg       fixed`}>
        <div className='w-[100%] px-5 pt-5'>
          <form onSubmit={handleSearch} >
            <InputPesquisa  name='search' ref={null} placeholder='Pesquisar'  type='search'   />
          </form>


        
          <div className='px-2  mt-5'>
            <div className='py-2 mb-[22px] justify-between flex items-center '>
              <p  className='   text-placeholder font-poppins text-secundaryTitle text-nowrap'>Pesquisas Recentes :</p>
              {localStorage.getItem('search') && localStorage.getItem('search')!="" ?<button title='Limpar pesquisas' className='outline-red-300'  onClick={()=>{
                  localStorage.removeItem("search")
                  setPesquisas([])
                 }}><Trash2  width={16} height={16} className='text-white hover:rotate-[25deg] cursor-pointer duration-300 ease-out'/></button> :null}
            </div>
            {pesquisas.length>0?pesquisas.map((item,i) => (
              <div key={i} className='flex group  justify-between items-center mb-4 '>
                <Link className='outline-red-600' onClick={()=>{
                  setModais(false)
                  showModalPesquisa(false)
                }} href={`/home/${item}`}  >
                  <p   className='group-hover:text-gray-300   duration-300 ease-in-out transition-all text-placeholder font-poppins text-secundaryTitle '>{item}</p> 
                </Link>
                  <button onClick={handleDeleteSearch} className='outline-red-600'><X  width={16} height={16} className='text-white z-10 group-hover:text-gray-300 cursor-pointer hover:rotate-[25deg] duration-300 ease-out'/></button> 
              </div>

            )):null}

            
          </div>    
        </div>
    </aside>
    {modalPesquisa?<div className=' z-10 fixed w-[100%] h-[100%] ' onTouchStart={closeAllModais} onClick={closeAllModais}>
      
    </div> :null}




  </>
  )
}

export default ModalPesquisa
