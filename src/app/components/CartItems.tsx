"use client"
import React, { useEffect, useRef } from 'react'
import { Cart, removeProductFromCart} from '../actions/cart'
import Image from 'next/image'
import { ChevronLeft, ChevronRight, LucideTrash2 } from 'lucide-react'
import {  useRouter } from 'next/navigation'
import Button from './Button'

function CartItems({cart}:{cart: Cart[]}) {

    const refFoto = useRef(null)

    const refCategories = useRef(null)



    

    const [hovering,setFotoHovering] = React.useState<null | HTMLImageElement>(null)


    async function handleDelete(productId: string) {
        await removeProductFromCart(productId)


        window.location.reload()

    }
    const route = useRouter()


    const handleHoverFoto = (e: React.MouseEvent<HTMLImageElement>) => {
        const photoDiv = refFoto.current = e.target as HTMLImageElement

        setFotoHovering(photoDiv)




    }

    const handleOutFoto = () => {
        refFoto.current = null

        setFotoHovering(null)




    }
    let drag = false

    const handleMouseDown = () => {
        drag = true;
    };
    
    const handleMouseOut = () => {
        drag = false;
    };
    
    const handleMouseUp = () => {
        drag = false;
    };
    
    const handleDragging = (e: React.MouseEvent<HTMLDivElement>) => {
        if (drag) {
            
            refCategories.current.scrollTop -= e.movementY;
            return
        }
        return
    };

    useEffect(()=>{
        document.documentElement.addEventListener('mouseup', handleMouseOut);
        return () => document.documentElement?.removeEventListener('mouseup', handleMouseOut)
    })



  return (
    <div ref={refCategories} onMouseMove={handleDragging}  onMouseDown={handleMouseDown} onMouseUp={handleMouseUp} className=' flex flex-col scrollable-content mt-10 font-poppins   gap-10  px-1 pb-1 '>
        {cart && cart.length>=1 ?cart.map((item) =>
            <div  key={item.product.id} className='bg-white  globalShadow select-none   rounded-md border-[0.5px] relative border-[#eeeeee]'>
                <button title='Remover Produto' onClick={()=> handleDelete(item.product.id)} className='absolute group select-none flex gap-2 text-mainTitle items-center top-[-30px] right-0'>
                    <LucideTrash2 width={24} height={24}  className='group-hover:rotate-[25deg] group-hover:scale-105 duration-300 ease-in-out' />
                    <p className='md:text-cartSubtitle text-cartSubtitleMobile'>Remover</p>
                </button>
                <div className='flex justify-between  p-5'>
                    <div className='flex gap-5 '>
                        <Image title={item.product.name} ref={refFoto} onMouseEnter={handleHoverFoto} onMouseLeave={handleOutFoto} onClick={ ()=> route.push(`/home/produto/${item.product.id}`)} width={150} height={150} src={hovering &&hovering.alt.includes(item.product.name) && item.product.photo.length>1?item.product.photo[1]:item.product.photo[0]} alt={item.product.name} className=' h-full w-full min-h-[100px] max-w-[100px] max-h-[100px] md:max-h-[150px] md:max-w-[150px] rounded-md cursor-pointer border-[2px] select-none border-mainStroke globalShadow  object-cover' />
                        <div className='flex flex-col justify-between'>
                            <div>
                                <h1 className='text-mainTitle select-none md:text-cartTitle text-cartTitleMobile  max-w-[300px]'>{item.product.name}</h1>
                            </div>
                            <div>
                                <p className='text-mainSubtitle select-none md:text-cartSubtitle text-cartSubtitleMobile mt-2'>7x de R${(+item.product.price.replaceAll("R$","").replaceAll(",",".")*item.quantity/7).toFixed(2).replace(".",",").toString()}</p>
                                <h1 className='text-mainTitle select-none text-cart'>Preço Total: R${(+item.product.price.replaceAll("R$","").replaceAll(",",".")* item.quantity).toFixed(2).replace(".",",").toString()}</h1>
                            </div>
                        </div>
                    </div>
                    <div className='flex flex-col items-end justify-between'>
                        <div className='flex flex-col items-center gap-2'>
                            <h1 className='text-mainTitle select-none md:text-cartSubtitle text-cartSubtitleMobile'>Quantidade</h1>
                            <div className='flex items-center gap-2'>
                                <ChevronLeft className='text-mainTitle'/>
                                <p  className='text-mainSubtitle select-none md:text-cartSubtitle text-cartSubtitleMobile'>{item.quantity}</p>
                                <ChevronRight className='text-mainTitle'/>
                            </div>
                        </div>
                        <div>
                            <p className='text-mainSubtitle select-none md:text-cartSubtitle text-cartSubtitleMobile'>Tamanho: ({item.product.size[0]})</p>
                        </div>

                    </div>

                </div>


            </div>)
        :<div>
            <Button label='Continuar Comprando' classes='px-10 py-5' redirect='/home' version={2} />
            
            
        </div>}

    </div>
  )
}

export default CartItems
