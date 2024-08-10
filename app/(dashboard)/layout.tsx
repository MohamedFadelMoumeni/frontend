import React from 'react'
import DashboardSideBar from '@/components/shared/sidebar/dashboard-sidebar'
import DashboardNavbar from '@/components/shared/navbar/dashboard-navbar'
import { authenticated} from '@/lib/actions/auth'
import { redirect } from 'next/navigation'
import { getUserDetails } from '@/lib/actions/profile'

const RootLayout = async ({children} : { children: React.ReactNode }) => {
  const isAuthenticared = await  authenticated()
  const userDetails = await getUserDetails()
   if(!isAuthenticared || !userDetails) redirect('/sign-in')
  return (
    <main className='w-full relative flex'>
        <DashboardSideBar user={userDetails} />
       <div className='stretch w-full relative h-screen flex flex-col overflow-y-scroll'>
        <DashboardNavbar  />
       {children}
       </div>
    </main>
  )
}

export default RootLayout