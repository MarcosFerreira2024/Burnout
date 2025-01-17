import React from 'react'
import Carousel from '../../../components/Carousel'
import { MainCarousel } from '../../../data/CarouselData'
import NavCategories from '../../../components/NavCategories'

function page() {
  return (
    <div className='flex-1 grid mx-auto  '>
        <Carousel dados={MainCarousel} />

        <NavCategories />

    </div>
  )
}

export default page
