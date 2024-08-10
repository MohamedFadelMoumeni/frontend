import React from 'react'
import CardDirectory from '@/components/analytics/card-directory'
import { IoHardwareChipOutline } from "react-icons/io5";


const AnalyticsPage = () => {
  return (
    <main className="relative w-full flex-grow  overflow-x-hidden overflow-y-auto">
      <CardDirectory />
        <div className="absolute top-0 bottom-0 right-0 left-0 backdrop-blur-sm bg-white/30 z-10 flex items-center justify-center" >
        <div className='w-1/2 bg-primary p-6 rounded-lg shadow-lg flex items-center justify-center gap-2'>
        <IoHardwareChipOutline size={25} className='text-white'/>
        <h1 className='bold-xl text-white text-center'>
        Coming soon !
          </h1>
        </div>
        </div>
    </main>
  )
}

export default AnalyticsPage