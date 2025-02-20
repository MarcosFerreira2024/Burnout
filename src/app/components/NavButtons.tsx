"use client"
import Image from 'next/image'
import Link from 'next/link'
import React, { ComponentPropsWithRef, useContext, useEffect, useRef, useState} from 'react'
import { NavContext } from '../Contexts/navBarContext'
import { UserContext } from '../Contexts/UserContext'
interface NavButton{
    label:string,
    src:string,
    alt:string,
    perfil:boolean,
    onClick?: React.MouseEventHandler<HTMLButtonElement>,
    classes?:string,
    href:string | boolean,
    props?:ComponentPropsWithRef<"button">,
}
function NavButton({onClick,label,href,src="/ui/perfil.svg",alt,perfil,classes, ...props}:NavButton) {
  const buttonRef = useRef(null)
  const timeOutRefAddClass = useRef(null)

  const {cart,user} = useContext(UserContext)

  const {modais,mounted} = useContext(NavContext)
  const [disabled, setDisabled] = useState(false)

  useEffect(()=>{
    if(!modais){
      setDisabled(false)
      buttonRef.current?.classList.add("xl:max-w-[160px]")
      return
    }
    if(modais){
      setDisabled(true)
      if(timeOutRefAddClass.current){
        clearTimeout(timeOutRefAddClass.current)
      }
        timeOutRefAddClass.current=setTimeout(()=>{
        setDisabled(false)
        buttonRef.current?.classList.remove("xl:max-w-[160px]")
        buttonRef.current?.classList.add("max-w-[32px]")
      },200)
    }
  },[modais])






    if(href && typeof href === "string"){
      
      return(
        <Link title={alt} data-tooltip={cart? cart.length:0} {...props} href={href} ref={buttonRef} className={` ${classes} ${label==="Carrinho"?`${cart && cart.length>0?"tooltip":""}`:""} globalShadow flex outline-mainSubtitle relative  hover:opacity-90 hover:bg-mainStroke transition-opacity  ease-in-out duration-300 border-[1px] border-mainStroke gap-2    ${modais ?" animaInNavBarButtons  ":(`${mounted?"animaOutNavBarButtons":""} xl:justify-normal  xl:pl-2`)} w-[100%] xl:max-w-[160px] font-poppins py-1 min-h-[32px]  max-h-[32px] max-w-[32px] items-center bg-mainBg   rounded-md    `}>
        <Image width={24} height={24} title={alt} className={`${perfil?"min-w-[24px] max-w-[24px] min-h-[24px] max-h-[24px] bg-mainBg object-cover rounded-full":""} ${modais?"relative left-[3px]":"relative left-[3px]  xl:left-0"}`} src={perfil?user.photo?user.photo:"/ui/perfil.png":src} alt={alt}/>
        <p className={`text-secundaryTitle text-subtitle ${modais?"hidden ":"xl:block"} hidden`}>{label}</p></Link>
      )
    }
  return (
    <button {...props} disabled={disabled} onClick={onClick} ref={buttonRef} title={alt}   className={` ${classes} globalShadow cursor-pointer flex outline-mainSubtitle relative  hover:opacity-90 hover:bg-mainStroke transition-opacity  ease-in-out duration-300 border-[1px] border-mainStroke gap-2    ${modais ?" animaInNavBarButtons  ":(`${mounted?"animaOutNavBarButtons":""} xl:justify-normal xl:pl-2`)} w-[100%]  xl:max-w-[160px]  font-poppins py-1 min-h-[32px] max-h-[32px] max-w-[32px] items-center bg-mainBg   rounded-md    `} >
        <Image width={24} height={24} title={alt} className={`${perfil?"min-w-[24px] max-w-[24px] min-h-[24px] max-h-[24px] bg-mainBg object-cover rounded-full":""} ${modais?"relative left-[3px]":"relative left-[3px]  xl:left-0"}`} src={perfil?user.photo?user.photo:"/ui/perfil.png":src} alt={alt}/>
        <p className={`text-secundaryTitle text-subtitle ${modais?"hidden ":"xl:block"} hidden`}>{label}</p>
    </button>

  )
}

export default NavButton
