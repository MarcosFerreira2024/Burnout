import React from 'react'
import SingleProductPage from '../../../../../../components/SingleProductPage'
import { ComprasContextProvider } from '../../../../../../Contexts/ComprasContext'

async function page({params}:{
    params: Promise<{produtos: string,
      id:string
    }> }) {
        const productId = (await params).id

      
  return (
    <section className='flex-1 grid relative  overflow-hidden mx-auto mt-20 sm:mt-5 px-5'>
      <ComprasContextProvider>
        <SingleProductPage id={productId}/>
        
      </ComprasContextProvider>
      
    </section>
  )
}

export default page