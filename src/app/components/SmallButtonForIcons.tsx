import { LucideCamera } from 'lucide-react'
import Image from 'next/image'
import React from 'react'

type SmallButton = {
    src?:string,
    alt?:string,
    width?:number,
    height?:number,
    classes?:string,
    title:string
    props?:React.ComponentPropsWithoutRef<"button">,
    onClick: () => void
}

function SmallButtonForIcons({src,onClick,classes,alt,width,title,height,...props}:SmallButton) {
  return (
    <button onClick={onClick} {...props} title={title} className={`${classes} w-6 group-hover:scale-125 group-hover:border-white ease-in-out duration-300 trnasition-colors h-6 absolute  rounded-full z-10 bottom-0 right-0 items-center flex justify-center bg-mainBg border-[1px] border-mainStroke globalShadow`}>
        {src?<Image src={src} width={width?width:16} height={height?height:16} alt={alt} title={alt}/>:<LucideCamera  width={16} height={16} className='text-white'/>}
      
    </button>
  )
}

export default SmallButtonForIcons
