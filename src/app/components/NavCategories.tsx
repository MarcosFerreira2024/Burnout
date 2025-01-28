"use client"
import React, { useRef } from 'react'
import { ChevronLeft, ChevronRight, } from 'lucide-react'
import NavCategoriesButton, { HomeCategories } from './NavCategoriesButton'

function NavCategories({ dados }: { dados: HomeCategories[] }) {
  const refCategories = useRef(null)

  let dragging = false
  const handleDragging = (e: React.MouseEvent<HTMLDivElement>) => {
    if(dragging){
      refCategories.current.scrollLeft -= e.movementX
      return
    }
    return
  }
  const handleMouseDown = (e: React.MouseEvent<HTMLDivElement>) => {
    e.preventDefault()
    dragging = true
    return
  }

  const handleMouseUp = () => {
    dragging = false
    return
  }

  const handleChevronRight = () => {
    refCategories.current.scrollBy ({
      behavior: 'smooth',
      left: 200
    })
    return
  }

  const handleChevronLeft = () => {
    refCategories.current.scrollBy ({
      behavior: 'smooth',
      left: -200
    })
    return
  }

  document.documentElement.addEventListener('mouseup',handleMouseUp)




  return (

    <>
      <div className='md:mt-4 max-w-[1440px] mx-auto flex w-full   relative'>
        <button onClick={handleChevronRight} className='bg-mainBg absolute right-[0px] top-[10px] z-10  rounded-full globalShadow border-[2px] border-mainStroke'><ChevronRight width={24} height={24} className='text-secundaryTitle md:w-[24px] md:h-[24px] w-[20px] h-[20px]'/></button>
        <button onClick={handleChevronLeft} className='bg-mainBg absolute right-[46px] top-[10px] z-10 rounded-full globalShadow border-[2px] border-mainStroke'><ChevronLeft width={24} height={24} className='text-secundaryTitle md:w-[24px] md:h-[24px] w-[20px] h-[20px] '/></button>
      </div>

      <div ref={refCategories} onMouseUp={handleMouseUp} onMouseDown={handleMouseDown} onMouseMove={handleDragging} className='mx-auto    py-5 w-full overflow-hidden   mt-5 md:mt-[40px] max-w-[1440px]  relative      '>
            

            <div className='flex  select-none   '>

              {dados.map((item,i)=> (
                      <nav key={i} className='lg:min-w-[155px] select-none min-w-[90px] sm:min-w-[110px] md:min-w-[130px] my-1'>
                        <NavCategoriesButton  text={item.text} />
                      </nav>
              ))}


            </div>
              
     </div>
    </>
  )
}

export default NavCategories