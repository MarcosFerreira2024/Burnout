"use client"
import { usePathname } from 'next/navigation'
import React  from 'react'
import FilterButton from './FilterButton'
import { getAllProducts } from '../utils/Products'
import Breadcrumb from './Breadcrumb'
import Produtos from './Produtos'
import useSWR from 'swr'
import ACTIONS from '../consts/Urls'

function CategoriesPage({category}:{category:string}) {

    const path = usePathname()






    const { data, isLoading } = useSWR([ACTIONS.produtos.getAll.url,category] ,getAllProducts)

    const segments = path.split("/").filter(Boolean)




  return (
    <>  
        
        {isLoading?"" :data?  <section className=' max-w-[1440px]  mx-auto  w-full flex flex-col'>
            <header>
                <nav className='flex flex-col w-full font-poppins text-linkText text-mainTitle'>
                    <Breadcrumb segments={segments}/>

                    <div className='mt-[10px]   '>
                        <div className='flex items-center justify-between '>
                            <h1 className='md:text-produtosTitle text-produtosTitleMobile'>{decodeURI(category)}: <span className='text-subtitleMobile md:text-subtitle text-nowrap'>{data.length} produtos</span></h1>

                            <FilterButton />
                            
                        </div>
                        <div className='h-[2px] bg-mainBg mt-5'></div>

                    </div>
                </nav>

                
                
            
            </header>
            <section className='mt-[40px] '>
                <ul className='lg:grid flex flex-wrap justify-center  lg:grid-cols-3 xl:grid-cols-4 gap-4'>
                    {data.map((produto)=>(
                        <li className='' key={produto.id}><Produtos fav={produto.favorito} name={produto.name}  id={produto.id} category={produto.category} photo={produto.photo} price={produto.price}  /></li>
                    ))}
                </ul>




            </section>
        
        
        
        
        
        
        
        </section>:null}

    </>
  )
}

export default CategoriesPage
