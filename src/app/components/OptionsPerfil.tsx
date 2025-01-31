"use client"
import React, {  useContext } from 'react'
import { Options } from '../data/PerfilData'
import OptionsButton from './OptionsButton'
import { UserContext } from '../Contexts/UserContext'

function OptionsPerfil() {
    const {user} = useContext(UserContext)
  return (

    <div className=" w-[100%] mt-10 md:mt-20">
        <div  className='mx-auto flex flex-col max-w-[1440px]    '>

            <div className='flex w-full   gap-5 flex-wrap  '>

                {Options.map((option,i)=>(
                    <OptionsButton classes='sm:max-w-[calc(50%-10px)] w-full md:min-h-[100px] lg:min-h-[120px]'  key={i} icon={option.icon} redirect={option.redirect} subtitle={option.subtitle} title={option.title}/>
                ))}

            </div>

            <h1 className='text-perfilTitle font-poppins text-mainTitle mt-10 md:mt-20 mb-5'>Pedidos : </h1>

            {user?user.avaliacoes.length>0?<div>

                {/*logica para pegar os produtos*/}


            </div>:<div className='flex flex-col w-full justify-center items-center h-full '>
                <p className='  text-perfilTitle text-mainSubtitle text-center mb-5'>Você ainda não possui pedidos</p>
                <OptionsButton classes='max-w-[350px] w-full'   icon='AlertCircle' redirect={'/carrinho'} subtitle={'Veja seu carrinho'} title='Carrinho' />
                
            </div>:null}

                
 




        </div>
    </div>
  )
}

export default OptionsPerfil
