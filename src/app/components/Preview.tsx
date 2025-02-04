
"use client"
import React from 'react'
import { Star } from 'lucide-react'
import Carousel from './Carousel'
import FotosProduto from './FotosProduto'

type PreviewData = {

    name: string,
    colorName: string,
    colorHex: string,
    frete: string,
    price: string,
    size: string[],
    category: string[],
    photo: File[]
}

function Preview({dados}:{dados:PreviewData}) {


    const photo1 = dados.photo.length === 3 ? URL.createObjectURL(dados.photo[0]):"/home/not-available.png"
    const photo2 = dados.photo.length === 3 ? URL.createObjectURL(dados.photo[1]):"/home/not-available.png"
    const photo3 = dados.photo.length === 3 ? URL.createObjectURL(dados.photo[2]):"/home/not-available.png"

    const photoArray = [photo1,photo2,photo3]


  return (
    <>


    {dados? <article className=' max-w-[1440px] relative  grid lg:flex lg:gap-5 justify-center items-center lg:items-start lg:justify-between      mx-auto  w-full  '>
        
        <div className='flex  flex-col  gap-5'>
            <FotosProduto fav name={dados.name} photo={photoArray} />
            <div className='lg:hidden'><Carousel verMais={false} position='object-center' altura='max-h-[750px]' dados={[
            {
                src: photo1,
                alt: "foto1",
            },
            {
                src: photo2,
                alt: "foto2",

            },
            {
                src: photo3,
                alt: "foto3",

            }
            
        ]} /></div>



        </div>
        <section className='flex text-mainTitle font-poppins gap-5 mx-auto  lg:items-start items-center relative text-center lg:text-left min-h-full lg:min-h-[660px]  flex-col mt-10 lg:border-r-2 border-mainStroke'>
            <h1 className='xl:text-produtoTitle   text-produtoMobile   lg:break-words lg:min-w-[19ch]  lg:max-w-[30ch]  '>{dados.name?dados.name:""}</h1>
            <div className='flex gap-5 '>
                {dados.size? dados.size.map((size,i)=>(
                    <button key={i} className= " xl:min-w-[50px] min-w-[35px] min-h-[35px] ease-in-out duration-300 transition-all  xl:min-h-[50px] globalShadow  border-[2px] rounded-md cursor-pointer border-mainStroke flex items-center justify-center text-mainSubtitle hover:bg-mainBg hover:text-secundaryTitle" ><p className='text-center'>{size.toUpperCase()}</p></button>
                )):null}

            </div>
            <div className='flex flex-col items-center lg:items-start gap-2'>
                <h1 className='text-produtoSubtitle  '>Cor : <span className='text-produtoSubtitleMobile'>{dados.colorName?"":dados.colorName}</span></h1>
                <div style={{background:dados.colorHex?dados.colorHex:"#ffffff"}} className={` globalShadow w-[50px] h-[50px] border-2 border-mainStroke rounded-full`}>

                </div>

            </div>
            <h1 className='text-produtoSubtitle  '>Frete : <span className='text-produtoSubtitleMobile'>{dados.frete?dados.frete:"Grátis"}</span></h1>
            <div className='flex  gap-2 items-center'>
                <Star/>
                <span>5,0</span>

            </div>
            <div className='flex  gap-1 flex-col items-center lg:items-start'>
                <p className='text-produtoSubtitleMobile '>4x de R${(parseFloat((dados.price?dados.price:"R$ 0,00").replace("R$","").replace(",","."))/4.).toFixed(2).replace(".",",")} </p>
                <h1 className='text-produtoTitle  '>{dados.price?dados.price:"R$ 0,00"}</h1>

            </div>

        </section>
    
    
    
    
    
    
    
    </article>:null}
</>
  )
}

export default Preview
