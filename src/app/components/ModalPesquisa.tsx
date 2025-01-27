import React, { useContext} from 'react'
import InputPesquisa from './InputPesquisa'
import { NavContext } from '../Contexts/navBarContext'
import { X } from 'lucide-react'
import Link from 'next/link'

function ModalPesquisa() {
    const {modalPesquisa,showModalPesquisa,setModais,handleDeleteSearch,handleSearch,pesquisas} = useContext(NavContext)




    

  return (
    <aside className={`${modalPesquisa?"translate-x-[77px]    ": " translate-x-[-228px]"} z-20  globalShadow rounded-tr-md   w-[300px] min-h-[100%] transition-all ease-in-out duration-700  border-[1px] border-mainStroke   bg-mainBg       fixed`}>
        <div className='w-[100%] px-5 pt-5'>
          <form onSubmit={handleSearch} >
            <InputPesquisa  name='search' ref={null} placeholder='Pesquisar'  type='search'   />
          </form>


        
          <div className='px-2'>
            {pesquisas.map((item,i) => (
              <div key={i} className='flex group  justify-between items-center  mt-5'>
                <Link onClick={()=>{
                  setModais(false)
                  showModalPesquisa(false)
                }} href={`/home/${item}`}  >
                  <p   className='group-hover:text-gray-300  duration-300 ease-in-out transition-all text-placeholder font-poppins text-secundaryTitle '>{item}</p> 
                </Link>
                  <X onClick={handleDeleteSearch} width={16} height={16} className='text-white z-10 group-hover:text-gray-300 cursor-pointer hover:rotate-[25deg] duration-300 ease-out'/> 
              </div>

            ))}

            
          </div>    
        </div>
    </aside> 
  )
}

export default ModalPesquisa
