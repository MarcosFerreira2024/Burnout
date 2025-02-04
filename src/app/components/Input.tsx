"use client"
import { EyeIcon, EyeOffIcon } from "lucide-react"
import { useState } from "react"
import Message from "./Message"

interface Input {
  type: string,
  id: string,
  label?: string,
  placeholder?: string,
  name: string,
  ref?: React.RefObject<HTMLInputElement>,
  props?: React.ComponentPropsWithoutRef<"input">,
  inputPassword?:boolean,
  error?: string
  classes?: string
  value?: string
  onChange?: (e: React.ChangeEvent<HTMLInputElement>)=>void
}


function Input({ref,classes,value, onChange, inputPassword,type,error,id,label,placeholder,name,...props}:Input) {
      const [showPassword,setShowPassword] = useState(false)
  return (
    <div className='flex gap-1 flex-col relative ' >
      <Message error={error}  />
      <div className={`flex self-start items-center gap-2 `}>
        {label?<label className='text-labelMobile md:text-label text-mainTitle font-poppins' htmlFor={id}>{label}</label>:null}
        {inputPassword?(showPassword?<EyeOffIcon  strokeWidth={1} className='cursor-pointer' onClick={() => setShowPassword(false)} width={24} color='#B91C1C'/> :<EyeIcon strokeWidth={1}  className='cursor-pointer' onClick={() => setShowPassword(true)} width={24} color='#B91C1C'/>):null}
        
        
      </div>
      <input ref={ref} value={value} onChange={onChange} {...props} className={`${classes}   placeholder:text-placeholderMobile placeholder:md:text-placeholder transition-all  focus-visible:outline-red-600 focus-visible:bg-secundarySubtitle focus-visible:text-mainTitle focus-visible:placeholder:text-mainTitle hover:bg-secundarySubtitle hover:placeholder:text-mainTitle text-secundaryTitle hover:text-mainTitle duration-300 ease-in-out   w-full max-w-[400px] border-[2px] border-mainStroke p-2 font-poppins   placeholder:text-secundarySubtitle bg-mainBg rounded-md globalShadow `} type={`${inputPassword?(showPassword?"text":type):type}`} id={id} name={name} placeholder={placeholder} required />
    </div>
  )
}

export default Input
