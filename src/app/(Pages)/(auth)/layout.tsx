import Image from "next/image";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
        <main className="bg">
            <div className="flex min-h-[100vh] w-[100vw]   mx-auto relative max-w-[1440px] ">

                <div className='flex-1 pt-[120px] hidden lg:md:flex xl:items-start items-center flex-col    bg-mainBg   '>

                    <div className="flex gap-5">
                        <div>
                            <Image src={"/auth/logo-burnout.svg"} width={160} height={37} className="absolute top-[20px]" alt='Logo Empresa' />
                            <Image src={"/auth/auth-foto.png"} width={400} quality={100} height={620} className='max-h-[590px] rounded-[4px] inner drop' alt='Logo Empresa' />
                        </div>
                        <div className='hidden  xl:flex flex-col max-w-[360px] break-words hyphens-auto '>
                            <h1 className='text-title text-secundaryTitle font-alex text-nowrap '>Faça seu Estilo</h1>
                            <p className='text-subtitle mb-2 text-secundaryTitle font-poppins '>Fundada em 2025, a Burnout é uma marca dinâmica dedicada a redefinir a moda feminina.</p>
                            <span className='w-[full] h-[2px] mb-2 bg-secundaryBg'></span>
                            <p className='text-subtitle text-secundaryTitle font-poppins'>Nossa coleção foi cuidadosamente projetada para combinar estilo contemporâneo com conforto excepcional, 
                                garantindo que cada peça não apenas melhore o seu guarda-roupa, 
                                mas também eleve sua experiência no dia a dia.</p>
                        </div>
                    </div>

                </div>  
                <div className='flex-1 lg:max-w-[500px] justify-center flex  pt-[120px]  bg-secundaryBg'>
                        <div>
                            {children}
                        </div>
                </div>
            </div>
        </main>
  );
}
