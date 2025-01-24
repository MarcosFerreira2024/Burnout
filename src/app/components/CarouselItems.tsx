import Image from 'next/image'
import React from 'react'
import CarouselButton from './CarouselButton'
import { Carousel } from '../Types/Interfaces/Carousel'


function CarouselItem({position="object-top",verMais,altura="max-h-[700px]",texto,src="/home/not-available.png",alt}:Carousel) {
  return (
     <div id='carousel' className='min-w-[calc(100%)] flex flex-col select-none items-center justify-center relative     '>
        <Image  src={src} width={1400} height={700} quality={100} draggable={false} className={`rounded-md globalShadow ${altura} min-h-[100%] ${position}  min-w-[100%]  object-cover `} title={alt} alt={alt}/>
        {texto?<h1 className='font-alex absolute textShadow    text-titleMobile sm:text-title text-secundaryTitle  '>{texto}</h1>:null}
        {verMais?<div className={` absolute bottom-10 sm:bottom-20 `}><CarouselButton redirect={"/teste"} /></div>:null}
    </div>
  )
}

export default CarouselItem
