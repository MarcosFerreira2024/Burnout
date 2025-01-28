"use client"
import { usePathname } from 'next/navigation'
import React, { useContext, useEffect, useRef, useState } from 'react'
import {  getOneProduct } from '../utils/Products'
import Breadcrumb from './Breadcrumb'
import { Product } from '../Types/Interfaces/Produtos'
import FotosProduto from './FotosProduto'
import Carousel from './Carousel'
import { Star } from 'lucide-react'
import Button from './Button'
import { ComprasContext } from '../Contexts/ComprasContext'
import AvisoModal from './AvisoModal'

function SingleProductPage({id}:{id:string}) {

    const [produtos,setProdutos] = useState<null |Product>(null)
    const [selectedSize, setSize] = useState("")

    const [canSelect, setCanSelect] = useState(true)

    const timeOutAviso = useRef(null)

    const {aviso,setAvisoCompra} = useContext(ComprasContext)

    const path = usePathname()

    useEffect(()=>{
            async function getProdutos(id:string) {
                const produtos = await getOneProduct(id)
                setProdutos(produtos)

            }
            getProdutos(id)
    
        },[id])
    const segments = path.split("/").filter(Boolean)

    const handleCompra = () =>{
        if(timeOutAviso.current) clearTimeout(timeOutAviso.current)
        if(selectedSize===""){
            window.alert("Selecione um tamanho")
            return
        }
        setAvisoCompra(true)
        setCanSelect(false)

        timeOutAviso.current = setTimeout(()=>{
            setAvisoCompra(false)
            setCanSelect(true)
        },2000)
    }
    const handleSize = (size:string) =>{
        if(aviso){
            setCanSelect(false)
            return
        }
        setSize(size)
    }    


  return (
    <>
        <AvisoModal produto={produtos?.name.split(" ")[0] +" "+ `(${selectedSize.toLocaleUpperCase()})`}/>

        {produtos?<article className=' max-w-[1440px] relative overflow-hidden  grid lg:flex lg:gap-5 justify-center items-center lg:items-start lg:justify-between      mx-auto  w-full  '>
            

            <div className='flex  flex-col  gap-5'>
                <Breadcrumb segments={segments}  />

                <FotosProduto fav name={produtos.name} photo={produtos.photo} />
                <div className='lg:hidden '><Carousel verMais={false} position='object-center' altura='max-h-[750px]' dados={[
                {
                    src: produtos.photo[0],
                    alt: produtos.name,
                },
                {
                    src: produtos.photo[1],
                    alt: produtos.name,
    
                },
                {
                    src: produtos.photo[2],
                    alt: produtos.name,
    
                }
                
            ]} /></div>



            </div>
            <section className='flex text-mainTitle font-poppins gap-5 mx-auto  lg:items-start items-center relative text-center lg:text-left min-h-full lg:min-h-[660px]  flex-col mt-10 lg:border-r-2 border-mainStroke'>
                <h1 className='xl:text-produtoTitle   text-produtoMobile   lg:break-words lg:min-w-[19ch]  lg:max-w-[30ch]  '>{produtos.name}</h1>
                <div className='flex gap-5 '>
                    {produtos.size.map((size,i)=>(
                        <button onClick={()=>handleSize(size)} onTouchStart={()=>handleSize(size)} key={i} className={`${selectedSize===size?"bg-mainBg cursor-default text-secundaryTitle":""} xl:min-w-[50px] min-w-[35px] min-h-[35px] ease-in-out duration-300 transition-all  xl:min-h-[50px] globalShadow  border-[2px] rounded-md cursor-pointer border-mainStroke flex items-center justify-center text-mainSubtitle hover:bg-mainBg hover:text-secundaryTitle`}><p className='text-center'>{size.toUpperCase()}</p></button>
                    ))}

                </div>
                <div className='flex flex-col items-center lg:items-start gap-2'>
                    <h1 className='text-produtoSubtitle  '>Cor : <span className='text-produtoSubtitleMobile'>{produtos.colorName}</span></h1>
                    <div style={{background:produtos.colorHex}} className={` globalShadow w-[50px] h-[50px] border-2 border-mainStroke rounded-full`}>

                    </div>

                </div>
                <h1 className='text-produtoSubtitle  '>Frete : <span className='text-produtoSubtitleMobile'>{produtos.frete}</span></h1>
                <div className='flex  gap-2 items-center'>
                    <Star/>
                    <span>{produtos.rating.toFixed(1).replace(".",",")}</span>

                </div>
                <div className='flex  gap-1 flex-col items-center lg:items-start'>
                    <p className='text-produtoSubtitleMobile '>4x de R${(parseFloat(produtos.price.replace("R$","").replace(",","."))/4.).toFixed(2).replace(".",",")} </p>
                    <h1 className='text-produtoTitle  '>{produtos.price}</h1>

                <Button disabled={!canSelect} onClick={handleCompra} classes='w-full px-10 py-3' label='Comprar'/>
                </div>

            </section>
        
        
        
        
        
        
        
        </article>:null}
    </>


  )
}
export default SingleProductPage
