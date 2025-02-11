import React from 'react'
import HeaderPerfil from '../../../../components/HeaderPerfil'
import ModalPicture from '../../../../components/ModalPicture'
import Enderecos from '../../../../components/Enderecos'
import AlterarDados from '../../../../components/AlterarDados'
import OptionsChangeData from '../../../../components/OptionsChangeData'

function page() {
  return (
    
    <>
      <ModalPicture  />
      <Enderecos />
      <div className='flex-1 grid grid-cols-1 max-w-[1440px] gap-5 md:gap-10 px-5   mx-auto '>
          <HeaderPerfil version={2} alterarDados={true}/>
          <div className='grid grid-cols-2 gap-5'>

          <AlterarDados />


          <div>
            <OptionsChangeData />
            
          </div>




          </div>

        
      </div>
    </>
  )
}

export default page
