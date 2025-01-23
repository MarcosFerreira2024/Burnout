import React, { ButtonHTMLAttributes } from 'react'


interface formButton extends ButtonHTMLAttributes<HTMLButtonElement>{
  classes?:string
  label:string,
  disabled?:boolean,
  props?:ButtonHTMLAttributes<HTMLButtonElement>
}

function Button({label,disabled,classes, ...props}:formButton) {

  


  return (
    <button {...props} disabled={disabled}  className={` ${classes}    globalShadow  self-start disabled:opacity-50 disabled:cursor-not-allowed focus:outline-red-600 focus:bg-secundarySubtitle focus:text-mainTitle  hover:bg-secundarySubtitle  text-secundaryTitle hover:text-mainTitle transition-all duration-300 ease-in-out text-buttonForm     border-[2px] border-mainStroke py-2 font-poppins   bg-mainBg rounded-md  `}>
        {label}
    </button>
  )
}

export default Button
