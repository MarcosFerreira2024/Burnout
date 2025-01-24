import * as Icons from "lucide-react"
import Link from 'next/link';
import React from 'react'
type Options ={
    title:string,
    subtitle:string,
    redirect:string | boolean,
    icon:string
    classes?:string
    props?:React.ComponentPropsWithoutRef<"button">
}   

function OptionsButton({classes,title,subtitle,redirect,icon,...props}:Options) {

    const DynamicIcon = Icons[icon]
  return (
    <>
    {redirect && typeof redirect === "string"? 
    <Link href={redirect} title={subtitle}    className={`${classes} font-poppins border-2 border-mainStroke focus:outline-red-600 focus:bg-secundaryTitle  rounded-md globalShadow     lg:max-h-[120px] transition-all ease-in-out duration-300 min-h-[80px]  px-2  lg:px-5  bg-mainBg group hover:bg-secundaryTitle flex items-center gap-4 `}>
        <div>
        {DynamicIcon? <DynamicIcon width={24} height={24} className={`text-white group-focus:text-mainTitle group-hover:text-mainTitle`} />: <Icons.AlertCircle/>}
        </div>
        <div className="flex  flex-col gap-1 ">
            <h1 className="lg:text-perfilTitle text-perfilTitleMobile self-start group-hover:text-mainTitle group-focus:text-mainTitle text-secundaryTitle">{title}</h1>
            <p className="text-perfilSubtitleMobile lg:text-perfilSubtitle group-hover:text-mainSubtitle group-focus:text-mainSubtitle text-secundarySubtitle xl:max-w-[300px] xl:min-w-[300px] ">{subtitle}</p>   
        </div>
      
    </Link> :    
    <button {...props} title={subtitle}    className={`${classes} font-poppins border-2 border-mainStroke focus:outline-red-600 focus:bg-secundaryTitle focus:text-mainTitle rounded-md globalShadow     lg:max-h-[120px] transition-all ease-in-out duration-300 min-h-[80px]  px-2  lg:px-5  bg-mainBg group hover:bg-secundaryTitle flex items-center gap-4 `}>
        <div>
         {DynamicIcon? <DynamicIcon width={24} height={24} className={`text-white group-focus:text-mainTitle group-hover:text-mainTitle`} />: <Icons.AlertCircle/>}
        </div>
        <div className="flex  flex-col gap-1 ">
            <h1 className="lg:text-perfilTitle text-perfilTitleMobile self-start group-hover:text-mainTitle group-focus:text-mainTitle text-secundaryTitle">{title}</h1>
            <p className="text-perfilSubtitleMobile lg:text-perfilSubtitle group-hover:text-mainSubtitle group-focus:text-mainSubtitle text-secundarySubtitle xl:max-w-[300px] xl:min-w-[300px] text-left ">{subtitle}</p>   
        </div>
      
    </button>}
    
    </>

  )
}

export default OptionsButton
