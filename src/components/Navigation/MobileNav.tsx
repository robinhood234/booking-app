"use client"
import Link from 'next/link'
import React, { useState } from 'react'
import SideNav from '../SideNav';

const MobileNav = () => {
  const [open, setOpen] = useState(false);
  
  return (
    <div className='flex justify-between p-3 bg-background gap-1 shadow-md'>
        <Link href={"/"}>
         <div className='flex justify-center items-center gap-2'>    
        <img src="/star-fall-svgrepo-com.svg" alt="" className='w-8 h-8' />   
      <span className='text-2xl font-dancing'>Star Nights</span>
      </div>
        </Link>
        <img onClick={(e)=> setOpen(prev => !prev)} src="/icons/menu-svgrepo-com.svg" alt="" className='w-8 h-8'/>
        <SideNav open={open} setOpen={setOpen}/>
    </div>
  )
}

export default MobileNav