"use client"
import {  ChevronLeft, ChevronRight } from 'lucide-react'
import React, { useState } from 'react'
import { CarouselData } from '../data/CarouselData'
import ItemCarousel from './ItemCarousel'




function Carousel({dados}:{dados:CarouselData[]}) {

  const [slide,setSlide]= useState(0)

  const handleSlide = (id:number) => {
    if(slide===0&&id===-1){
      setSlide(200)
      return
    }
    if(slide===(dados.length-1)*100&&id===+1){
      setSlide(0)
      return
    }

    setSlide((current)=> current + id*100)
    
      
  } 
  console.log(dados)

  return (
    <div className='w-[100%]  pr-5 pl-5'>
      <div className='mx-auto  max-w-[1440px]  relative w-[100%]  flex   overflow-hidden  '>
        <div className='absolute flex h-[100%] justify-between w-[calc(100%)] items-center  z-50   '>
              <ChevronLeft onClick={()=> handleSlide(-1)} width={48} height={48} color={`#FFF4F4`}  className='cursor-pointer sm:max-w-[48px] max-w-[24px]'/>
              
              <ChevronRight onClick={()=>handleSlide(+1)} width={48} height={48} color={`#FFF4F4`} data-id={+1} className='cursor-pointer sm:max-w-[48px] max-w-[24px]'/>
          </div>

        <div style={{transform: `translateX(calc(-${slide}% ))` }} className='flex   transition-all ease-in-out duration-700   '>

            {dados.map((item,i)=> (
                <ItemCarousel key={i} texto={item.texto} src={item.src} alt={item.alt}/>
            ))}

        </div>


     </div>
    </div>

  )
}

export default Carousel
