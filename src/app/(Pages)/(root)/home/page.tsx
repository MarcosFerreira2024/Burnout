import React from 'react'
import Carousel from '../../../components/Carousel'
import { MainCarousel } from '../../../data/CarouselData'

function page() {
  return (
    <div >
        <Carousel dados={MainCarousel} />
    </div>
  )
}

export default page
