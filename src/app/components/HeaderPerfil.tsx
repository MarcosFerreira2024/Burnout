"use client"
import Image from 'next/image'
import React, { useContext } from 'react'
import { UserContext } from '../Contexts/UserContext'
import SmallButtonForIcons from './SmallButtonForIcons'
import { LucideHeart, LucideMail, LucideShoppingCart } from 'lucide-react'
import ProfileButton from './ProfileButton'

function HeaderPerfil() {
    const {user} = useContext(UserContext)
  return (
    <div className=" w-[100%] sm:mt-5">
      <div  className='mx-auto  max-w-[1440px]    '>

        <div className='w-full py-5   px-5 items-center rounded-md bg-mainBg flex globalShadow'>
            <div className='flex  justify-between items-center w-full text-secundaryTitle font-poppins'>
                <div className='flex gap-2'>
                    <div className='relative group  max-h-[80px] max-w-[80px] min-h-[80px] min-w-[80px] md:max-h-[98px] md:max-w-[98px] md:min-h-[98px] md:min-w-[98px]'>
                        <Image title={user.name} alt={"foto de " + user.name} src={user.photo?user.photo:"/ui/perfil.png"} width={112} height={112} className='w-[80px] h-[80px] md:w-[98px] md:h-[98px] globalShadow   duration-300 ease-in-out transition-colors  object-center rounded-full border-2 border-mainStroke object-cover' />
                        <SmallButtonForIcons />
                    </div>
                    <div className='flex flex-col gap-1'>
                        <h1 className='text-perfilTitleMobile md:text-perfilTitle text-nowrap'>{user.name.split(" ").length>1?user.name.split(" ")[0] +" "+ user.name.split(" ")[user.name.split(" ").length-1]:user.name}</h1>
                        <div className='flex gap-2 items-center '>
                            <LucideMail width={16} height={16}/>
                            <p className='md:text-perfilSubtitle text-perfilSubtitleMobile'>{user.email}</p>

                        </div>
                        <div className='flex gap-2 items-center '>
                            <LucideHeart width={16} height={16}/>
                            <p className='md:text-perfilSubtitle text-perfilSubtitleMobile'>{user.fav?user.fav.length:0} favoritos</p>

                        </div>
                        <div className='flex gap-2 items-center '>
                            <LucideShoppingCart width={16} height={16}/>
                            <p className='md:text-perfilSubtitle text-perfilSubtitleMobile'>{user.carrinho?(user.carrinho.cartItem.length as number === 1 ? "1 produto no carrinho" :user.carrinho.cartItem.length + " produtos no carrinho"):"0 produtos no carrinho"} </p>

                        </div>
                    </div>
                </div>
                    <ProfileButton/>


                
            </div>
            <div>
                
            </div>

        </div>



     </div>
    </div>
  )
}

export default HeaderPerfil
