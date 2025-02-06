"use client"
import React, { useContext } from 'react'
import { UserContext } from '../Contexts/UserContext'
import Produtos from './Produtos'
import useSWR from 'swr'
import ACTIONS from '../consts/Urls'
import { getAllProductsAdmin } from '../utils/Products'
import Pagination from './Pagination'
import { usePathname } from 'next/navigation'
import Footer from './Footer'



function AdmProducts() {

    const pathName = usePathname()

    const page = pathName.split("/")[pathName.split("/").length - 1 ]





    
    const { user  } = useContext(UserContext)

    const {isLoading:isProductLoading, data} = useSWR ([ACTIONS.produtos.getAllAdmin.url,page],getAllProductsAdmin)

  return (
    <>
       
       {isProductLoading?null:
        <> 
          <section className='grid  md:grid-cols-2  lg:grid-cols-3 xl:grid-cols-4  justify-center mx-auto max-w-[1440px] gap-5 '>

          {data.produtos.map(item => <Produtos url={pathName} key={item.id}  category={item.category} fav={user.fav.find(fav => fav === item.id)} id={item.id} photo={item.photo} name={item.name} price={item.price}/>)}
          </section>

          <div className='  justify-center grid'><Pagination currentPage={parseInt(page)} totalPages={data.totalPages}  /></div>




         <Footer/>




          

          
        </>
       }
    </>
  )
}

export default AdmProducts
