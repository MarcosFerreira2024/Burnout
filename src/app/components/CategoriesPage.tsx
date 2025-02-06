"use client"
import { usePathname } from 'next/navigation'
import React  from 'react'
import FilterButton from './FilterButton'
import { getAllProducts } from '../utils/Products'
import Breadcrumb from './Breadcrumb'
import Produtos from './Produtos'
import useSWR from 'swr'
import ACTIONS from '../consts/Urls'
import Pagination from './Pagination'
import Footer from './Footer'

function CategoriesPage({category}:{category:string}) {

    const path = usePathname()


    const pageNumber = +(path.split("/")[path.split("/").length - 1 ].replace("page=",''))


    










    const { data, isLoading } = useSWR([ACTIONS.produtos.getAll.url,category,pageNumber] ,getAllProducts)

    const segments = path.split("/").filter(Boolean)




  return (
    <>  
        
        {isLoading?"" :data.produtos?  <section className=' max-w-[1440px]  mx-auto  w-full flex flex-col'>
            <header>
                <nav className='flex flex-col w-full font-poppins text-linkText text-mainTitle'>
                    <Breadcrumb segments={segments}/>

                    <div className='mt-[10px]   '>
                        <div className='flex items-center justify-between '>
                            <h1 className='md:text-produtosTitle text-produtosTitleMobile'>{decodeURI(category)}: <span className='text-subtitleMobile md:text-subtitle text-nowrap'>Mostrando {data.produtos.length} de {data.totalProducts} produtos</span></h1>

                            <FilterButton />
                            
                        </div>
                        <div className='h-[2px] bg-mainBg mt-5'></div>

                    </div>
                </nav>

                
                
            
            </header>
            <section className='mt-[40px] '>
                <ul className='lg:grid flex flex-wrap justify-center  lg:grid-cols-3 xl:grid-cols-4 gap-4'>
                    {data.produtos.map((produto)=>(
                        <li className='' key={produto.id}><Produtos url={path} fav={produto.favorito} name={produto.name}  id={produto.id} category={produto.category} photo={produto.photo} price={produto.price}  /></li>
                    ))}
                </ul>




            </section>
            <div className='mt-5'><Pagination  currentPage={pageNumber} totalPages={data.totalPages}/></div>


            <Footer/>

        
        
        
        
        
        
        
        </section>:null}

    </>
  )
}

export default CategoriesPage
