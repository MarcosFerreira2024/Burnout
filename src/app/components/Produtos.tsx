"use client"
import Link from 'next/link'
import React, {  useContext, useState } from 'react'
import { ComponenteProduto } from '../Types/Interfaces/Produtos'
import Image from 'next/image'
import FavButton from './FavButton'
import { UserContext } from '../Contexts/UserContext'
import { Pencil, Trash2 } from 'lucide-react'
import { useRouter } from 'next/navigation'
import { deleteProduct } from '../actions/products'
import { mutate } from 'swr'
import ACTIONS from '../consts/Urls'


function Produtos({id,fav,photo,category,name,price,}:ComponenteProduto) {

  const {user} = useContext(UserContext)

  const route = useRouter()

  const handleDelete = async (e:React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault()
    await deleteProduct(id)
    mutate([ACTIONS.produtos.getAllAdmin.url])
    mutate([ACTIONS.produtos.getAll.url,category])
  };

  const [hover,setHover] = useState(null)


    const parcelas = (parseInt(price.split("R$")[1].split(",")[0])/7).toFixed(2).replace(".",",")
  return (
    <article onMouseEnter={()=>setHover(true)} onMouseLeave={()=>setHover(false)} className='flex flex-col font-poppins w-full max-w-[400px]   '>
        <Link href={`/home/${category[0]}/${id}`} className='focus-visible:outline-red-600 '>
        <div className='relative  '>
                {hover && photo.length>1 ?<Image src={photo[1]} width={348} quality={100} height={350} className='min-w-full border-[2px]  border-mainStroke rounded-md object-cover h-full min-h-[400px] max-h-[400px]' alt={name} title={name} />:<Image src={photo[0]} width={348} quality={100} height={350} className='min-w-full border-[2px]  border-mainStroke rounded-md object-cover h-full min-h-[400px] max-h-[400px]' alt={name} title={name} />}
                <div onClick={(e)=> {
                  e.preventDefault()
                }} className='absolute top-[10px] right-[10px]'><FavButton favorito={fav}/></div>
                {user.role==="ADMIN"?<>
                  <button onClick={(e) => 
                  {
                    e.preventDefault()
                    route.push(`update/${id}`)
                  }
                } className='absolute top-[10px] left-[10px] hover:scale-105 h-[32px] w-[32px] flex items-center justify-center ease-linear duration-300 transition-all hover:bg-white  rounded-full '><Pencil className='text-mainTitle' width={24} height={24} />  </button>
                <button onClick={async (e)=> handleDelete(e)} className='absolute top-[-30px] right-[0px]   flex items-center justify-center ease-linear duration-300 transition-all   rounded-full  '><Trash2 className='text-mainTitle' width={24} height={24} />  </button>
                
                
                
                </> :null}
            
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
