import Link from 'next/link';
import React from 'react'

function Breadcrumb({segments}:{segments:string[]}) {
  return (
        <nav className='text-sm font-poppins'>
            <ul className='flex'>
                {segments.map((segment, index) => {
                const path = `/${segments.slice(0, index + 1).join('/')}`;
                return (
                    <li key={index}>
                        <Link  href={path} className='flex focus-visible:outline-red-600 text-mainTitle'  >
                            <p className='hover:underline hover:opacity-90   '>{segment.charAt(0).toUpperCase() + segment.slice(1)}</p>
                            <span>/</span>
                        </Link>
                    </li>

                    
                );
                })}
            </ul>

        </nav>
  )
}

export default Breadcrumb
