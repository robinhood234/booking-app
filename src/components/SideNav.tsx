import Link from 'next/link'
import { usePathname } from 'next/navigation';
import React from 'react'
interface Props{
  open: boolean,
  setOpen: React.Dispatch<React.SetStateAction<boolean>>
}
const SideNav = ({open, setOpen}: Props) => {
       const pathname = usePathname();
    
    const isActive = (path: string) => pathname == path;
  return (
    
    <div className={`
    fixed inset-y-0 right-0 bg-white shadow-lg overflow-hidden
    transition-all duration-300 ease-in-out
    ${open ? "w-1/2 translate-x-0 opacity-100" : "w-0 translate-x-full opacity-0 pointer-events-none"}
  `}
>

        <div className='flex flex-col gap-y-6 p-4'>
        <img onClick={(e)=> setOpen(prev => !prev)} src="/icons/cancel-svgrepo-com.svg" alt="" className='w-6 h-6'/>
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
      </div>
      </div>
  )
}

export default SideNav