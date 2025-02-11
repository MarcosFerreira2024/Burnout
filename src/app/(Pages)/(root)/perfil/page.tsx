import React from 'react'
import HeaderPerfil from '../../../components/HeaderPerfil'
import OptionsPerfil from '../../../components/OptionsPerfil'
import Footer from '../../../components/Footer'
import ModalPicture from '../../../components/ModalPicture'

function page() {
  return (
    <>
    <ModalPicture />
    <div className='flex-1 grid mx-auto max-w-[1440px]  mt-20 sm:mt-0 px-5  '>

      <HeaderPerfil version={1} />
      <OptionsPerfil />
      <Footer/>

    </div>
  </>
  )

}

export default page
