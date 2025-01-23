import React from 'react'
import CategoriesPage from '../../../../components/CategoriesPage'

async function page({params}:{
    params: Promise<{produtos: string}> }) {
        const categoria = (await params).produtos
  return (
    <section className='flex-1 grid mx-auto mt-20 sm:mt-5 px-5'>
        <CategoriesPage category={categoria.charAt(0).toLocaleUpperCase() + categoria.slice(1)} />
    </section>
  )
}

export default page
