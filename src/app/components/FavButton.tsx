import { LucideHeart } from 'lucide-react'
import React from 'react'

function FavButton({favorito}) {
  return (
    <div className='w-[32px] h-[32px]  flex items-center   justify-center bg-mainBg border-2 border-mainStroke globalShadow rounded-full'>
        <LucideHeart width={24} height={24} className={`text-white ease-in`}  fill={`${favorito?"white":'none'}`}/>
      
    </div>
  )
}

export default FavButton
