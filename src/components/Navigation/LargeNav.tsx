"use client"
import Link from 'next/link'
import { usePathname } from 'next/navigation';
import React from 'react'

const LargeNav = () => {

   const pathname = usePathname();

const isActive = (path: string) => pathname == path;
  return (
    <div className='flex justify-between p-3 bg-background gap-1 shadow-md'>
  
  <Link href={"/"}>
  
      <div className='flex justify-center items-center gap-2'>    
        <img src="/star-fall-svgrepo-com.svg" alt="" className='w-8 h-8' />   
      <span className='text-2xl font-dancing'>Star Nights</span>
      </div>
  </Link>

    <div className='flex gap-x-6 items-center justify-center'>

    <Link href={"/about"}>
    
     <button className={`${isActive('/about') ? "after:w-full" : "after:w-0 hover:after:w-full"} font-inter flex justify-center items-center gap-2 py-2 cursor-pointer rounded-md relative after:absolute after:left-0 after:bottom-0 after:h-[2px] after:w-0 after:bg-black after:transition-all after:duration-300 after:ease-out hover:after:w-full`}> 
        <span>About</span> 
        </button>
    </Link>

    <Link href={"/gallery"}>
        <button className={`${isActive('/gallery') ? "after:w-full" : "after:w-0 hover:after:w-full"} font-inter flex justify-center items-center gap-2 py-2 cursor-pointer rounded-md relative after:absolute after:left-0 after:bottom-0 after:h-[2px] after:w-0 after:bg-black after:transition-all after:duration-300 after:ease-out hover:after:w-full`}> 
        <span>Gallery</span> 
        </button>
    </Link>

        <Link href={"/contact"}>
        <button className={`${isActive('/contact') ? "after:w-full" : "after:w-0 hover:after:w-full"} font-inter flex justify-center items-center gap-2 py-2 cursor-pointer rounded-md relative after:absolute after:left-0 after:bottom-0 after:h-[2px] after:w-0 after:bg-black after:transition-all after:duration-300 after:ease-out hover:after:w-full`}> 
        <span>Contact</span> 
        </button>
        </Link>

        <Link href={"/book"}>
<button className="cursor-pointer group bg-gray-900 text-white px-4 py-2 rounded-lg shadow-md hover:bg-black flex items-center justify-center gap-2 " > 
    <span className="transition-all duration-300">Book a room</span> 
    {/* Arrow wrapper */} 
    <span className=" w-0 overflow-hidden transition-all duration-300 ease-out group-hover:w-4 flex"> 
        <img src="/icons/right-arrow-svgrepo-com.svg" alt="" className=" w-4 -translate-x-2 transition-all duration-300 ease-out group-hover:translate-x-0 " /> 
        </span>
         </button>
        </Link>
    </div>




    </div>
  )
}

export default LargeNav