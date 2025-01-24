import React from 'react'
import HeaderPerfil from '../../../components/HeaderPerfil'
import OptionsPerfil from '../../../components/OptionsPerfil'
import Footer from '../../../components/Footer'

function page() {
  return (
    <div className='flex-1 grid mx-auto mt-20 sm:mt-0 px-5  '>
      <HeaderPerfil />
      <OptionsPerfil />
      <Footer/>

    </div>
  )
}

export default page
