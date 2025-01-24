"use client"
import React, { useState } from 'react'
import FavButton from './FavButton'
import Image from 'next/image'
 

function FotosProduto({photo,name,fav}:{photo:string[],name:string,fav:boolean}) {
    const [fotoAtual,setfoto] = useState<string>(photo[0])
  return (
    <div className='hidden lg:flex flex-col   w-full lg:max-w-[640px]  '>
            <div >
                <div className='relative'>
                    <Image src={fotoAtual} width={1920} quality={100} height={720} className='w-full border-mainStroke border-[2px] min-w-full  lg:max-w-[560px]  rounded-md globalShadow min-h-[600px] max-h-[600px] lg:max-h-[660px]  object-cover h-full lg:min-h-[660px]' alt={name} title={name} />
                    <div className='absolute top-[10px] right-[10px]'><FavButton favorito={fav}/></div>
                </div>

                
            </div>
            <div className=' w-full flex justify-between  gap-5  mt-5  '>
                {photo.map((_,index)=>(
                     
                    <div className="flex-1 lg:min-h-[190px] lg:max-w-[200px]  lg:max-h-[200px]" key={index}><Image  onClick={()=>setfoto(photo[index])} src={photo[index]} width={1920} quality={100} height={1080} className={`w-full h-full   border-mainStroke border-[2px] rounded-md globalShadow ${fotoAtual === photo[index]?"":"cursor-pointer"} object-cover  `} alt={name} title={name} /></div>

                ))}
            </div>

    </div>
  )
}

export default FotosProduto
