import React from 'react'
import Image from 'next/image'
import FooterItems from './FooterItems'

function Footer() {
  return (
    <footer className='max-w-[1440px] rounded-t-md globalShadow  w-full  bg-mainBg mx-auto mt-10 md:mt-20 font-poppins '>
            <div className='p-5'><Image alt='Logo da Burnout' src={"/auth/logo-burnout.svg"} width={100} height={200} /></div>
           <div className='grid   gap-5 lg:grid-cols-5 px-5 pb-5'>
            <FooterItems />
           </div>
    </footer>
  )
}

export default Footer
