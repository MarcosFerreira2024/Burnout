import Image from 'next/image'
import React from 'react'

interface Carousel  {
    texto : string,
    src : string,
    alt : string,
}
function ItemCarousel({texto,src,alt}:Carousel) {
  return (
    <>
     <div className='min-w-[calc(100%)] relative flex items-center justify-center  '>
        <h1 className='font-alex absolute textShadow   text-titleMobile sm:text-title text-secundaryTitle  '>{texto}</h1>
        <Image  src={src} width={1400} height={700} quality={100} className='sm:rounded-md  max-h-[700px] min-h-[100%] min-w-[100%]  object-cover object-top' alt={alt}/>
    </div>
    </>
  )
}

export default ItemCarousel
