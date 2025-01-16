import Image from 'next/image'
import React from 'react'

function Carousel() {
  return (
    <div className='mx-auto sm:pt-5  sm:px-5 max-w-[1240px]  '>
      <Image  src={"/home/foto-1.png"} width={1440} height={600} quality={100} className='sm:rounded-md object-cover object-top' alt='hollywood Style'/>
    </div>
  )
}

export default Carousel
