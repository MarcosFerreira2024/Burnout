"use client"
import React, { useState, useEffect } from 'react'
import { Atendimento, Contato, Departamentos, Institucional, MinhaConta, NovidadesPromocoes } from '../data/FooterData'
import Link from 'next/link'
import Image from 'next/image'
import { ChevronDown } from 'lucide-react'

function FooterItems() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 1024);
    };

    handleResize();
    window.addEventListener('resize', handleResize);

    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const handleAccordion = (e: React.MouseEvent<HTMLDivElement>) => {
    if (window.innerWidth < 1024) {
      if (e.currentTarget.children[1].classList.contains('active')) {
        e.currentTarget.children[1].classList.remove('active');
        e.currentTarget.children[1].classList.add('hidden');
        e.currentTarget.children[0].children[1].classList.remove('rotate-180');
        return;
      }
      document.querySelectorAll('.active').forEach((item) => {
        item.classList.remove('active');
        item.classList.add('hidden');
        item.previousElementSibling?.children[1].classList.remove('rotate-180');
        return;
      });
      e.currentTarget.children[1].classList.add('active');
      e.currentTarget.children[1].classList.remove('hidden');
      e.currentTarget.children[0].children[1].classList.add('rotate-180');
    }
  };
  
  const handleMobile = (pressedKey: React.KeyboardEvent)=>{
   if(pressedKey.key === 'Enter'){
    handleAccordion(pressedKey as unknown as React.MouseEvent<HTMLDivElement>)
    return
   }
   return
    
  }

  return (
    <>
      <div onClick={handleAccordion} className='outline-white' onKeyDown={handleMobile} role='button' tabIndex={isMobile ? 0 : -1}>
        <div className='flex justify-between items-center w-full globalShadow lg:shadow-none px-2 py-5 lg:px-0 lg:py-0'>
          <h1 className='text-subtitle rounded-md lg:rounded-none text-secundaryTitle'>Departamentos</h1>
          <ChevronDown className='transition-all duration-300 ease-in-out lg:hidden text-white' />
        </div>
        <ul className='lg:flex flex-col mt-1 hidden'>
          {Departamentos.map((item, i) => (
            <li key={i}>
              <Link href={item.ref} className='text-secundarySubtitle text-footerSubtitle hover:opacity-90 focus-visible:bg-white focus-visible:text-mainTitle focus-visible:outline-none focus-visible:border-[2px]'>
                {item.name}
              </Link>
            </li>
          ))}
        </ul>
      </div>

      <div onClick={handleAccordion} className='outline-white' onKeyDown={handleMobile} role='button' tabIndex={isMobile ? 0 : -1}>
        <div className='flex justify-between items-center w-full globalShadow lg:shadow-none px-2 py-5 lg:px-0 lg:py-0'>
          <h1 className='text-subtitle rounded-md lg:rounded-none text-secundaryTitle'>Novidades e Promoções</h1>
          <ChevronDown className='transition-all duration-300 ease-in-out lg:hidden text-white' />
        </div>

        <ul className='lg:flex flex-col mt-1 hidden'>
          {NovidadesPromocoes.map((item, i) => (
            <li key={i}>
              <Link href={item.ref} className='text-secundarySubtitle text-footerSubtitle hover:opacity-90 focus-visible:bg-white focus-visible:text-mainTitle focus-visible:outline-none focus-visible:border-[2px]'>
                {item.name}
              </Link>
            </li>
          ))}
          <div>
            <h1 className='text-subtitle text-secundaryTitle mt-2 lg:block hidden'>Baixe nossos Aplicativos</h1>
            <ul className='lg:flex hidden flex-col gap-2 relative right-2 mt-2'>
              <li><Link href={"#"}> <Image alt='App na PlayStore' width={132} height={132} src={"/ui/playstore.svg"} /></Link></li>
              <li><Link href={"#"}> <Image alt='App na AppleStore' width={132} height={132} src={"/ui/apple.svg"} /></Link></li>
            </ul>
          </div>
        </ul>
      </div>

      <div onClick={handleAccordion} className='outline-white' onKeyDown={handleMobile} role='button' tabIndex={isMobile ? 0 : -1}>
        <div className='flex justify-between items-center w-full globalShadow lg:shadow-none px-2 py-5 lg:px-0 lg:py-0'>
          <h1 className='text-subtitle rounded-md lg:rounded-none text-secundaryTitle'>Minha Conta</h1>
          <ChevronDown className='transition-all duration-300 ease-in-out lg:hidden text-white' />
        </div>
        <ul className='lg:flex flex-col mt-1 hidden'>
          {MinhaConta.map((item, i) => (
            <li key={i}>
              <Link href={item.ref} className='text-secundarySubtitle text-footerSubtitle hover:opacity-90 focus-visible:bg-white focus-visible:text-mainTitle focus-visible:outline-none focus-visible:border-[2px]'>
                {item.name}
              </Link>
            </li>
          ))}
        </ul>
      </div>

      <div onClick={handleAccordion} className='outline-white' onKeyDown={handleMobile} role='button' tabIndex={isMobile ? 0 : -1}>
        <div className='flex justify-between items-center w-full globalShadow lg:shadow-none px-2 py-5 lg:px-0 lg:py-0'>
          <h1 className='text-subtitle rounded-md lg:rounded-none text-secundaryTitle'>Contato</h1>
          <ChevronDown className='transition-all duration-300 ease-in-out lg:hidden text-white' />
        </div>

        <ul className='lg:flex flex-col mt-1 hidden'>
          {Contato.map((item, i) => (
            <li key={i}>
              <Link href={item.ref} className='text-secundarySubtitle text-footerSubtitle hover:opacity-90 focus-visible:bg-white focus-visible:text-mainTitle focus-visible:outline-none focus-visible:border-[2px]'>
                {item.alt}
              </Link>
            </li>
          ))}
        </ul>
      </div>

      <div onClick={handleAccordion} className='outline-white' onKeyDown={handleMobile} role='button' tabIndex={isMobile ? 0 : -1}>
        <div className='flex justify-between items-center w-full globalShadow lg:shadow-none px-2 py-5 lg:px-0 lg:py-0'>
          <h1 className='text-subtitle rounded-md lg:rounded-none text-secundaryTitle'>Institucional</h1>
          <ChevronDown className='transition-all duration-300 ease-in-out lg:hidden text-white' />
        </div>
        <ul className='lg:flex flex-col mt-1 hidden'>
          {Institucional.map((item, i) => (
            <li key={i}>
              <Link href={item.ref} className='text-secundarySubtitle text-footerSubtitle hover:opacity-90 focus-visible:bg-white focus-visible:text-mainTitle focus-visible:outline-none focus-visible:border-[2px]'>
                {item.name}
              </Link>
            </li>
          ))}
        </ul>
      </div>

      <div onClick={handleAccordion} className='outline-white lg:hidden' onKeyDown={handleMobile} role='button'  tabIndex={isMobile ? 0 : -1}>
        <div className='flex justify-between items-center w-full globalShadow lg:shadow-none px-2 py-5 lg:px-0 lg:py-0'>
          <h1 className='text-subtitle rounded-md lg:rounded-none text-secundaryTitle'>Nossos Aplicativos</h1>
          <ChevronDown className='transition-all duration-300 ease-in-out lg:hidden text-white' />
        </div>
        <ul className='lg:flex hidden flex-col gap-2 relative right-0 mt-2'>
          <li><Link href={"#"} className='outline-white'> <Image alt='App na PlayStore' width={132} height={132} src={"/ui/playstore.svg"} /></Link></li>
          <li><Link href={"#"} className='outline-white'> <Image alt='App na AppleStore' width={132} height={132} src={"/ui/apple.svg"} /></Link></li>
        </ul>
      </div>

      <div onClick={handleAccordion} className='outline-white' onKeyDown={handleMobile} role='button' tabIndex={isMobile ? 0 : -1}>
        <div className='flex justify-between items-center w-full globalShadow lg:shadow-none px-2 py-5 lg:px-0 lg:py-0'>
          <h1 className='text-subtitle rounded-md lg:rounded-none text-secundaryTitle'>Atendimento</h1>
          <ChevronDown className='transition-all duration-300 ease-in-out lg:hidden text-white' />
        </div>
        <ul className='lg:flex flex-col mt-1 hidden'>
          {Atendimento.map((item, i) => (
            <li key={i} className='text-secundarySubtitle text-footerSubtitle max-w-[200px] focus-visible:border-[2px]'>
              {item.name}
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}

export default FooterItems;