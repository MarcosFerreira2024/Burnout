"use cliennt"
import Link from 'next/link'
import React, { useState } from 'react'
import { ComponenteProduto } from '../Types/Interfaces/Produtos'
import Image from 'next/image'
import FavButton from './FavButton'


function Produtos({id,fav,photo,category,name,price,}:ComponenteProduto) {

  const [hover,setHover] = useState(null)

    const parcelas = (parseInt(price.split("R$")[1].split(",")[0])/7).toFixed(2).replace(".",",")
  return (
    <article onMouseEnter={()=>setHover(true)} onMouseLeave={()=>setHover(false)} className='flex flex-col font-poppins w-full max-w-[400px]   '>
        <Link href={`/home/${category[0]}/${id}`} className='focus-visible:outline-red-600 '>
        <div className='relative border-[2px]  border-mainStroke rounded-md overflow-hidden'>
                {hover && photo.length>1 ?<Image src={photo[1]} width={348} quality={100} height={350} className='min-w-full object-cover h-full min-h-[350px]' alt={name} title={name} />:<Image src={photo[0]} width={348} quality={100} height={350} className='min-w-full object-cover h-full min-h-[350px]' alt={name} title={name} />}
                <div className='absolute top-[10px] right-[10px]'><FavButton favorito={fav}/></div>
            
        </div>
        <div className='flex flex-col mt-2 text-center'>
            <h2 className='text-produtosSubtitle text-mainSubtitle min-h-[60px] '>{name}</h2>
            <h1 className='text-produtosTitle text-mainTitle mb-2'>{price}</h1>
            <span className='text-produtosSubtitle text-mainSubtitle mb-5'>7x de R${parcelas}</span>
        </div>

        
        
        
        </Link>
      
    </article>
  )
}

export default Produtos
