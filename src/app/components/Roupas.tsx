import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

export interface Roupa {
    title:string,
    photo:string,
    redirect:string,

}

function Roupas({data}:{data:Roupa[]}) {
  return (
    <section className='max-w-[1440px]  mx-auto flex flex-col gap-2 md:mt-[80px] mt-[40px] '>
        <div>
        <h1 className='text-mainTitle   font-alex md:tex-title text-titleMobile'>Mais Vendidos :</h1>
        </div>
        <div className='max-w-[1440px]  w-full  mx-auto grid md:grid-cols-3 gap-5 md:gap-2'>
            {data?data.map((item,id)=>(
                <Link href={item.redirect} key={id} >
                    <Image src={item.photo} alt={item.title} title={item.title} height={1920} width={1080} className='globalShadow min-h-[600px] max-w- rounded-md w-flil h-full object-cover' />
                </Link>
            )):null} 
        </div>
        
 
      
    </section>
  )
}

export default Roupas
