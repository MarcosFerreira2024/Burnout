import React from 'react'
import Carousel from '../../../components/Carousel'
import { MainCarousel } from '../../../data/CarouselData'
import NavCategories from '../../../components/NavCategories'
import { HomeMainCategories } from '../../../data/Home'

function page() {
  return (
    <div className='flex-1 grid mx-auto mt-20 sm:mt-0 px-5  '>
        <Carousel dados={MainCarousel} />

        <NavCategories dados={HomeMainCategories} />

    </div>
  )
}

export default page
