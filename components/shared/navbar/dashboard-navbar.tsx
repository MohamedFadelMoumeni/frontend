import React from 'react'
import HelpDropdown from '@/components/dashboard/help-dropdown'
import MobileNavbar from './mobile-navbar';
import SignOut from './signout';



const DashboardNavbar = () => {
  return (
    <header className='w-full py-2 px-2 md:px-10 border-1 border-b-[1px] border-gray-200 bg-white sticky top-0 right-0 left-0  z-20' >
        <div className='w-full flex items-center justify-end'>
           
            <div className='flex items-center gap-6'>
            <HelpDropdown  />
            <SignOut />
            </div>
        </div>
        <MobileNavbar />
    </header>
  )
}

export default DashboardNavbar