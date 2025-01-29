"use client"
import Image from 'next/image'
import React from 'react'
import Button from './Button'
import {  useRouter } from 'next/navigation'


function CardHome() {

  const route = useRouter()

  return (
    <div className='max-w-[1300px] cards select-none block  mx-auto h-[500px]  min-w-[1024px] w-full  relative mt-[116px] mb-[120px] '>
        <div className=' w-[100%] h-[100%] flex justify-center relative'>
          <div className='absolute  flex  top-0 left-[0px] '>
            <Image quality={99} src={"/home/card4.png"} alt='card1' width={650} height={240} className='  min-h-[190px] max-w-[650px] object-cover w-full ' />
            <div className='absolute  flex flex-col top-2 left-5'>
              <h1 className='font-alex text-titleMobile text-mainTitle'>Camisetas</h1>
              
              <p className='font-poppins text-subtitleMobile text-mainSubtitle max-w-[150px] font-bold'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua</p>
              <Button onClick={()=>  route.push("/home/Camisetas" )} label='Saiba Mais' classes='mt-2 px-2 text-subtitle' />
            </div>
          </div>
          <div className='absolute  flex   left-0   bottom-[-7px]'>
            <Image quality={99} src={"/home/card3.png"} alt='card1' width={650} height={240} className='  min-h-[190px] max-w-[650px] object-cover w-full  ' />
            <div className='absolute  flex flex-col top-2 left-5'>
              <h1 className='font-alex text-titleMobile text-mainTitle'>Blusas</h1>
              
              <p className='font-poppins text-subtitleMobile text-mainSubtitle max-w-[150px] font-bold'>Lorem ipsum dolor sit amet, consectetur </p>
              <Button onClick={()=> route.push("/home/Blusas",)} label='Saiba Mais' classes='mt-2 px-2 text-subtitle' />
            </div>

          </div>
          <div className='absolute  flex  right-0   bottom-[-20px] '>
            <Image quality={99} src={"/home/card2.png"} alt='card1' width={650} height={240} className='  min-h-[190px] max-w-[650px] object-cover w-full' />
            <div className='absolute  flex flex-col top-2 left-5'>
              <h1 className='font-alex text-titleMobile text-mainTitle'>Vestidos</h1>
              
              <p className='font-poppins text-subtitleMobile text-mainSubtitle max-w-[150px] font-bold'>Lorem ipsum consecna aliqua</p>
            <Button onClick={()=> route.push("/home/Vestidos",)} label='Saiba Mais' classes='mt-2 px-2 text-subtitle' />
            </div>
          </div>
          <div className='absolute  flex  right-0  top-[13px]'>
            <Image quality={99} src={"/home/card1.png"} alt='card1' width={650} height={240} className='  min-h-[190px] max-w-[650px] object-cover w-full  ' />
            <div className='absolute  flex flex-col top-2 left-5'>
              <h1 className='font-alex text-titleMobile text-mainTitle'>Óculos</h1>
              
              <p className='font-poppins text-subtitleMobile text-mainSubtitle max-w-[150px] font-bold'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, </p>
              <Button onClick={()=> route.push("/home/Óculos",)} label='Saiba Mais' classes='mt-2 px-2 text-subtitle' />
            </div>

          </div>
            
          <div className='min-h-[650px] absolute -z-10   top-0 bottom-0 translate-y-[-50px]   min-w-[650px] rounded-full  bg-card globalShadow'></div>
        </div>

      
    </div>
  )
}

export default CardHome
