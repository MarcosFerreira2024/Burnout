"use client"
import React, {useEffect, useState } from 'react'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import { usePathname, useRouter } from 'next/navigation'

function Pagination({currentPage, totalPages }: {currentPage: number, totalPages: number}) {

    const [ page, setPage ] = useState<number>(currentPage)

    const path = usePathname()

    const route = useRouter()


    const newPath = path.split("/").slice(0,-1).join("/")+"/"+(path.split("/")[path.split("/").length - 1 ]=`${page}`)

    useEffect(()=>{
        route.push(newPath)
    },[page,newPath,route])





    const [value, setValue] = React.useState<number>(currentPage)

    const handleDecrease = () => {
        if (page > 1){
            setPage(page - 1)
            setValue(page-1)
            
            
            
        }
        return

    }

    const handleIncrease = () => {
        if (page < totalPages) {
            setPage(page + 1)
            setValue(page + 1)
        }
        return

    }

    const handleKeyDown = (key: React.KeyboardEvent) => {
        if (key.key === 'Enter' && key.code === 'Enter') {
            const newPage = typeof value === 'string' ? parseInt(value) : value
            if (newPage >= 1 && newPage <= totalPages) {
                setPage(newPage)
            }
        }
    }

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const newValue = e.target.value
        const numericValue = parseInt(newValue)

        if (newValue === '') {
            setValue(currentPage)
        } else if (!isNaN(numericValue) && numericValue >= 1 && numericValue <= totalPages) {
            setValue(numericValue)
        }
    }

    return (
            <div className='flex  gap-5 items-center  justify-center md:mt-[60px]'>
                <ChevronLeft  className={`${page>1?"opacity-100 cursor-pointer": "opacity-50" } text-mainTitle`} width={32} height={32}   onClick={handleDecrease} />
                <input
                    type="text"
                    className=' w-[48px] h-[48px]  globalShadow border-mainStroke rounded-md border-[2px]   text-center text-mainTitle font-poppins md:text-produtoTitle text-produtosTitleMobile outline-none bg-transparent'
                
                    max={totalPages}
                    min={1}
                    value={value}
                    onChange={handleChange}
                    onKeyDown={handleKeyDown}
                />
                <span className='text-subtitle font-poppins text-mainTitle'>/</span><p className='w-[48px] h-[48px] globalShadow border-mainStroke rounded-md border-[2px] flex items-center justify-center text-center text-mainTitle font-poppins md:text-produtoTitle text-produtosTitleMobile select-none'>{totalPages}</p>
                <ChevronRight className={`${page < totalPages?"opacity-100 cursor-pointer": "opacity-50" } text-mainTitle`}  width={32} height={32}   onClick={handleIncrease} />

            </div>
    )
}

export default Pagination