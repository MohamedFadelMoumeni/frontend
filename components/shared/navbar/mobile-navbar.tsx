import React from 'react'
import MobileMenu from './mobile-menu'
import Link from 'next/link'
import { MdSlowMotionVideo } from 'react-icons/md'

const MobileNavbar = () => {
  return (
    <div className="w-full flex items-center justify-between  md:hidden">
         <Link href='/dashboard' className='flex  items-center justify-center logo'>
              <MdSlowMotionVideo className='text-2xl lg:text-lg' />
              <span >Play<span className='text-primary'>Tok</span></span>
              </Link>
        <MobileMenu />
      
    </div>
  )
}

export default MobileNavbar