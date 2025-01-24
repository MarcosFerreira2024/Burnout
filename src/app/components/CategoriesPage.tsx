"use client"
import { usePathname } from 'next/navigation'
import React, { useEffect, useState } from 'react'
import FilterButton from './FilterButton'
import { getAllProducts } from '../utils/Products'
import Breadcrumb from './Breadcrumb'
import Produtos from './Produtos'
import { Product } from '../Types/Interfaces/Produtos'

function CategoriesPage({category}:{category:string}) {

    const [produtos,setProdutos] = useState<null |Product[]>(null)
    const path = usePathname()


    useEffect(()=>{
        async function getProdutos(category:string) {
            const produtos = await getAllProducts(category)
            setProdutos(produtos)
        }
        getProdutos(category)

    },[category])
    const segments = path.split("/").filter(Boolean)




  return (
    <>
        {produtos?<section className=' max-w-[1440px]  mx-auto  w-full flex flex-col'>
            <header>
                <nav className='flex flex-col w-full font-poppins text-linkText text-mainBg'>
                    <Breadcrumb segments={segments}/>

                    <div className='mt-[10px]   '>
                        <div className='flex items-center justify-between '>
                            <h1 className='text-produtosTitle'>{category}: <span className='text-subtitle'>{produtos.length} produtos</span></h1>

                            <FilterButton />
                            
                        </div>
                        <div className='h-[2px] bg-mainBg mt-5'></div>

                    </div>
                </nav>

                
                
            
            </header>
            <section className='mt-[40px] '>
                <ul className='lg:grid flex flex-wrap justify-center  lg:grid-cols-3 xl:grid-cols-4 gap-4'>
                    {produtos.map((produto)=>(
                        <li className='' key={produto.id}><Produtos fav={produto.favorito} name={produto.name}  id={produto.id} category={produto.category} photo={produto.photo} price={produto.price}  /></li>
                    ))}
                </ul>




            </section>
        
        
        
        
        
        
        
        </section>:null}

    </>
  )
}

export default CategoriesPage
