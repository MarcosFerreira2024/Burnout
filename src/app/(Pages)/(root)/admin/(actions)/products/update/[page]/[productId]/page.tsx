import React from 'react'
import UpdateProduct from '../../../../../../../../components/UpdateProduct'

async function page({params}:{
  params: Promise<{
    productId:string
    page:string
  }> }) {
      const productId = (await params).productId

      console.log(productId)
  return (
    <div className='flex-1 grid max-w-[1440px] mx-auto mt-20 sm:mt-5 mb-5 px-5'>
      <UpdateProduct id={productId} />
    </div>
  )
}

export default page
