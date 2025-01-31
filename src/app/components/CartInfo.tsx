"use client"
import React, { useContext } from 'react'

import Button from './Button'

import { UserContext } from '../Contexts/UserContext'

function CartInfo() {

    const {cart} =  useContext(UserContext)


    const produtos = cart && cart.length>0?cart.reduce((acc, item) => acc + item.quantity, 0):null;

    function getTotal() {
     const total = cart && cart.length>0?cart.reduce((acc, item) => +item.product.price.replace(",", ".").replace("R$", "") * item.quantity + acc, 0).toFixed(2):null;
     return total;
   }
   
   const total = getTotal();
     
 
 
   const totalParcelado = (+total/7).toFixed(2).replace(".",",")

  return (
    <>
            {cart && cart.length>0?<div className='lg:mt-[150px] mt-[40px] w-full flex lg:flex-nowrap flex-wrap justify-center mx-auto  lg:flex-col gap-10'>
            <div  className='bg-white border-[1px] globalShadow border-[#eeeeee] min-w-full  max-h-[192px] h-full rounded-md'>
                <div className='p-5 flex flex-col h-[100%] font-poppins text-mainTitle md:text-cartSubtitle text-cartSubtitleMobile '>
                    <h1 className=' md:text-cartTitle text-cartTitleMobile   mb-2'>Resumo do pedido :</h1>
                    <div className='flex flex-col  justify-between gap-2 flex-1  '>
                        <div className='flex justify-between items-center'>
                            <p  >Produtos :</p>
                            <span className='text-nowrap text-mainSubtitle' >{produtos} Produtos</span>
                        </div>
                        <div className='flex justify-between items-center'>
                            <p  >Total:</p>
                            <span className='text-nowrap text-mainSubtitle' >R${total.replace(".",",")}</span>
                        </div>
                        <div className='flex justify-between items-center'>
                            <p  >Frete :</p>
                            <span className='text-nowrap text-mainSubtitle' >Grátis</span>
                        </div>
                        <div className='flex justify-between items-center bg-[#FFFAFA] border-[1px]  py-1 border-[#eeeeee] rounded-xl '>
                            <p  >Parcelado :</p>
                            <span className='text-nowrap text-mainSubtitle' >7x de {totalParcelado}</span>
                        </div>
                    </div>

                </div>

            </div>
            
            

            <div className='bg-white border-[1px] globalShadow border-[#eeeeee] min-w-full  max-h-[192px] h-full rounded-md'>
                <div className='p-5 flex flex-col h-[100%] font-poppins text-mainTitle md:text-cartSubtitle text-cartSubtitleMobile '>
                    <h1 className=' md:text-cartTitle text-cartTitleMobile   mb-2'>Entrega :</h1>
                    <div className='flex flex-col  justify-center bg-[#FFFAFA] border-[1px]   border-[#eeeeee] rounded-xl flex-1  '>

                        

                        

                    </div>

                </div>
            </div>

            <div className='bg-white border-[1px] globalShadow border-[#eeeeee] flex flex-col gap-2 p-5 min-w-full max-h-[192px] h-full rounded-md'>

                <div className='w-full h-full flex flex-col justify-center gap-5 items-center  '>
                    
                    <Button version={2} classes='px-5 self-center w-full py-5 ' label='Finalizar Compra' />

                    <Button  redirect='/home' version={1} classes='px-5 self-center w-full py-5' label='Continuar Comprando' />

                </div>



            </div>
            
        </div>:null}

    
    </>
  )
}

export default CartInfo
