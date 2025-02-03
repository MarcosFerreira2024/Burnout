"use client"
import {  ChevronLeft, ChevronRight } from 'lucide-react'
import React, { useEffect, useRef, useState } from 'react'
import ItemCarousel from './CarouselItems'
import { CarouselData } from '../Types/Interfaces/Carousel'




function Carousel({dados,verMais,altura,position}:{dados:CarouselData[],verMais:boolean,altura?:string,position?:string}) {
  const refTimeout = useRef(null)

  const interval = 6000


  const [slide,setSlide]= useState(0)


  const handleSlide = (id:number) => {
    if(refTimeout.current) clearTimeout(refTimeout.current)

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

  useEffect(()=>{
   startTimeOut()
   return () => clearTimeout(refTimeout.current) 
  })

  const handleMouseEnter = () => {
    pauseTimeOut()
    return
  }

  const handleMouseLeave = () => {
    startTimeOut()
    return
  }

  const pauseTimeOut = () => {
    if(refTimeout.current) clearTimeout(refTimeout.current)
    
    return
  }

  const startTimeOut = () => {
    if(refTimeout.current) clearTimeout(refTimeout.current)
      refTimeout.current = setTimeout(()=>{
        handleSlide(+1)
      },interval) 
    return
  }

  let pageStart = 0
  let pageEnd = 0

  const handleTouchStart = (e: React.TouchEvent<HTMLDivElement>) =>{
    pauseTimeOut()

    pageStart = e.touches[0].pageX


    


    return
  }
  const handleTouchEnd = (e: React.TouchEvent<HTMLDivElement>) =>{
    pauseTimeOut()


    pageEnd = e.changedTouches[0].pageX

    if(pageStart < pageEnd){
      handleSlide(-1)
    }

    if(pageStart > pageEnd){
      handleSlide(+1)
    }

    return
  }


  return (
    <div className=" w-[100%]">
      <div  className='mx-auto  max-w-[1440px]  relative    overflow-x-hidden  '>
        <div className=' flex h-[100%] justify-between absolute w-[100%] items-center     '>
              <div className=' rounded-full bg-black/[0.02] md:bg-black/[0.1] mx-1 globalShadow max-w-[36px] max-h-[36px] min-w-[36px] min-h-[36px]  flex items-center justify-center  z-10'><ChevronLeft onMouseMove={handleMouseEnter} onMouseLeave={handleMouseLeave} onClick={()=> handleSlide(-1)} width={36} height={36}   className='cursor-pointer   text-secundaryTitle  z-10    md:max-w-[36px]  max-w-[36px]'/></div>
              <div className=' rounded-full bg-black/[0.02] md:bg-black/[0.1] mx-1 globalShadow max-w-[36px] max-h-[36px] min-w-[36px] min-h-[36px]  flex items-center justify-center  z-10'><ChevronRight onMouseMove={handleMouseEnter} onMouseLeave={handleMouseLeave} onClick={()=>handleSlide(+1)} width={36} height={36}  data-id={+1} className='cursor-pointer z-10   text-secundaryTitle   md:max-w-[36px]  max-w-[36px]'/></div>
        </div>

        <div  onTouchStart={handleTouchStart} onTouchEnd={handleTouchEnd} onMouseMove={handleMouseEnter} onMouseLeave={handleMouseLeave} style={{transform: `translateX(calc(-${slide}% ))` }} className='flex   transition-all ease-in-out duration-700   '>

            {dados.map((item,i)=> (
                    <ItemCarousel redirect={item.redirect} altura={altura} position={position}  verMais={verMais} key={i}  texto={item.texto} src={item.src} alt={item.alt}/>
            ))}


        </div>


     </div>
    </div>

  )
}

export default Carousel
