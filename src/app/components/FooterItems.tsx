import React from 'react'
import { Contato, Departamentos, Institucional, MinhaConta, NovidadesPromocoes } from '../data/FooterData'
import Link from 'next/link'
import Image from 'next/image'

function FooterItems() {
  return (
    <>
      <div className=' '>
                <h1 className='text-subtitle text-secundaryTitle'>Departamentos</h1>
          <ul className='flex flex-col  mt-1'>
              {Departamentos.map((item,i) => (
                  <li key={i}><Link href={item.ref} className='text-secundarySubtitle text-footerSubtitle hover:opacity-90 focus:bg-white focus:text-mainTitle focus:outline-none focus:border-[2px] '>{item.name}</Link></li>
              ))}
          </ul>

      </div>
      <div className=' '>
          <h1 className='text-subtitle text-secundaryTitle'>Novidades e Promoções</h1>
          <ul className='flex flex-col  mt-1'>
              {NovidadesPromocoes.map((item,i) => (
                  <li key={i}><Link href={item.ref} className='text-secundarySubtitle text-footerSubtitle hover:opacity-90 focus:bg-white focus:text-mainTitle focus:outline-none focus:border-[2px] '>{item.name}</Link></li>
              ))}
          </ul>
          <h1 className='text-subtitle text-secundaryTitle mt-2'>Baixe nossos Aplicativos</h1>
          <ul className='flex flex-col gap-2 relative right-2 mt-2'>
             <Link href={"#"}> <Image alt='App na PlayStore' width={132} height={132} src={"/ui/playstore.svg"}/></Link>
             <Link href={"#"}> <Image alt='App na AppleStore' width={132} height={132} src={"/ui/apple.svg"}/></Link>

          </ul>

      </div>
      <div className=' '>
          <h1 className='text-subtitle text-secundaryTitle'>Minha Conta</h1>
          <ul className='flex flex-col  mt-1'>
              {MinhaConta.map((item,i) => (
                  <li key={i}><Link href={item.ref} className='text-secundarySubtitle text-footerSubtitle hover:opacity-90 focus:bg-white focus:text-mainTitle focus:outline-none focus:border-[2px] '>{item.name}</Link></li>
              ))}
          </ul>

      </div>
      <div className=' '>
          <h1 className='text-subtitle text-secundaryTitle'>Contato</h1>
          <ul className='flex flex-col  mt-1'>
              {Contato.map((item,i) => (
                  <li key={i}><Link href={item.ref} className='text-secundarySubtitle text-footerSubtitle hover:opacity-90 focus:bg-white focus:text-mainTitle focus:outline-none focus:border-[2px] '>{item.alt}</Link></li>
              ))}
          </ul>

      </div>
      <div className='  '>
          <h1 className='text-subtitle text-secundaryTitle'>Institucional</h1>
          <ul className='flex flex-col  mt-1'>
              {Institucional.map((item,i) => (
                  <li key={i}><Link href={item.ref} className='text-secundarySubtitle text-footerSubtitle hover:opacity-90 focus:bg-white focus:text-mainTitle focus:outline-none focus:border-[2px] '>{item.name}</Link></li>
              ))}
          </ul>

      </div>
    </>
  )
}

export default FooterItems
