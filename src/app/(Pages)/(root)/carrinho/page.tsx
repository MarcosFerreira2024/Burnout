import React from 'react'
import CartItems from '../../../components/CartItems'
import CartInfo from '../../../components/CartInfo';

export const dynamic = "force-dynamic";

async function page() {




 

   

  return (
    <section className='flex-1  lg:grid lg:gap-5 max-w-[1440px]  lg:grid-cols-3 mx-auto mt-20 sm:mt-5 mb-5 px-5'>
        <div className='col-span-2'>
            <h1 className='font-alex md:text-title text-titleMobile  text-mainTitle'>Carrinho :</h1>
            <CartItems  />
        </div>
        <>
        
            <CartInfo />
        </>
      
    </section>
  )
}

export default page
