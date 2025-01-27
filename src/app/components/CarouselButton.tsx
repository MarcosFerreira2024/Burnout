import { LucideMoveUpRight } from 'lucide-react';
import Link from 'next/link'
import React from 'react'

function CarouselButton({ redirect }) {
  return (
    <Link
      href={redirect}
      className="globalShadow flex  justify-center gap-2 disabled:opacity-50 items-center group disabled:cursor-not-allowed focus-visible:outline-red-600 focus-visible:bg-secundarySubtitle focus-visible:text-mainTitle  hover:bg-secundarySubtitle  text-secundaryTitle hover:text-mainTitle transition-all duration-300 ease-in-out   px-5 py-1  md:px-10 border-[2px] border-mainStroke md:py-2 font-poppins   bg-mainBg rounded-md  "
    >
      <h1 className="text-labelMobile font-poppins   md:text-label text-nowrap">
        Veja Mais
      </h1>
      <LucideMoveUpRight width={24} height={24} className='text-white md:max-w-full max-w-[16px] group-focus-visible:text-mainTitle group-hover:text-mainTitle' />
    </Link>
  );
}
export default CarouselButton