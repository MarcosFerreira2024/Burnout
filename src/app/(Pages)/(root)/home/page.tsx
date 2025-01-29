import React from 'react'
import Carousel from '../../../components/Carousel'
import { Estacoes, MainCarousel } from '../../../data/CarouselData'
import NavCategories from '../../../components/NavCategories'
import { DataRoupas, HomeMainCategories } from '../../../data/HomeData'
import CardHome from '../../../components/CardHome'
import Footer from '../../../components/Footer'
import Roupas from '../../../components/Roupas'

function page() {
  return (
    <div className='flex-1 grid mx-auto mt-20 sm:mt-0 px-5  '>
        <Carousel verMais altura='max-h-[700px]'  dados={MainCarousel} />

        <NavCategories dados={HomeMainCategories} />

        <CardHome />

        <Carousel verMais altura='max-h-[700px]'  dados={Estacoes} />

        <Roupas data={DataRoupas} />

        <Footer />

    </div>
  )
}

export default page
