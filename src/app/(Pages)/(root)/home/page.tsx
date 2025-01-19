import React from 'react'
import Carousel from '../../../components/Carousel'
import { Estacoes, MainCarousel } from '../../../data/CarouselData'
import NavCategories from '../../../components/NavCategories'
import { HomeMainCategories } from '../../../data/HomeData'
import CardHome from '../../../components/CardHome'
import Footer from '../../../components/Footer'

function page() {
  return (
    <div className='flex-1 grid mx-auto mt-20 sm:mt-0 px-5  '>
        <Carousel dados={MainCarousel} />

        <NavCategories dados={HomeMainCategories} />

        <CardHome />

        <Carousel dados={Estacoes} />

        <Footer />

    </div>
  )
}

export default page
