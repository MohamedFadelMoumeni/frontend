import React from 'react'
import { Button } from '../ui/button'
import { LuPlus } from "react-icons/lu";
import Link from 'next/link';

const HomeAds = () => {
  return (
    <div className="flex md:items-center justify-between flex-col md:flex-row col-span-2 w-full bg-[#222831] rounded-xl p-7 gap-6 md:gap-0 border shadow-md overflow-hidden text-white">
        <h2 className='md:w-1/2 semibold-xl !leading-[2rem]'>Create Interactive Videos Right Now</h2>
        <Link href='/dashboard/interactive-videos' className='gap-2 bg-white text-black rounded-full px-6 flex items-center py-2'>
        <LuPlus size={18} />
        <span className='regular-14'>New Video</span>
        </Link>
    </div>
  )
}

export default HomeAds