"use client"
import { useRouter } from 'next/navigation'
import React, { ButtonHTMLAttributes } from 'react'


interface formButton extends ButtonHTMLAttributes<HTMLButtonElement>{
  classes?:string
  label:string,
  disabled?:boolean,
  props?:ButtonHTMLAttributes<HTMLButtonElement>
  onClick?:React.MouseEventHandler<HTMLButtonElement>
  redirect?:string
  version?:number
}

function Button({onClick=null,redirect, version=2,label,disabled,classes, ...props}:formButton) {

  const route = useRouter()

  function handleRedirect () {
    route.push(redirect)
  }

  
  if(version === 1){
    return (
      <button 
        onClick={redirect?handleRedirect:(onClick?onClick:null)}
        {...props}
        disabled={disabled}
        className={`${classes} globalShadow self-start disabled:opacity-50 disabled:cursor-not-allowed focus-visible:outline-red-600 focus-visible:bg-mainTitle focus-visible:text-secundarySubtitle hover:bg-mainTitle text-mainTitle hover:text-secundaryTitle transition-all duration-300 ease-in-out text-buttonForm border-[2px] border-secundaryStroke py-2 font-poppins bg-secundaryBg rounded-md`}
      >
        {label}
      </button>
    )
  }


  return (
    <button  onClick={redirect?handleRedirect:(onClick?onClick:null)} {...props} disabled={disabled}  className={` ${classes}    globalShadow  self-start disabled:opacity-50 disabled:cursor-not-allowed focus-visible:outline-red-600 focus-visible:bg-secundarySubtitle focus-visible:text-mainTitle  hover:bg-secundarySubtitle  text-secundaryTitle hover:text-mainTitle transition-all duration-300 ease-in-out text-buttonForm     border-[2px] border-mainStroke py-2 font-poppins   bg-mainBg rounded-md  `}>
        {label}
    </button>
  )
}

export default Button
