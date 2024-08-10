import { Button } from '@/components/ui/button'
import React from 'react'
import GroupVideo from '@/components/dashboard/group-video'
import HomeAds from '@/components/dashboard/home-ads'
import { getUserDetails } from '@/lib/actions/profile'
import { UserType } from '@/types'



const DashboardPage = async  () => {
  const user : UserType = await getUserDetails()
  return (
   <main className='w-full padding-x-container py-10 md:py-20'>
   <h1 className='text-4xl font-bold'>Hi, {user.first_name}</h1>
   <div className='w-full my-8 bg-primary-linear p-4 md:p-8 text-white rounded-xl flex items-center justify-between flex-wrap gap-8 md:gap-0'>
    <h2 className='text-xl font-bold'>
    Access more features and metrics with PlayTok Pro
    </h2>
    <Button className='bg-white rounded-full text-black regular-14 px-10 py-6 ' variant='secondary'>Learn more !</Button>
   </div>
   <div className='w-full grid md:grid-cols-4 gap-6'>
    <GroupVideo title='Group your videos to add to site' btntext='Videos' href='/dashboard/interactive-videos' />
    <GroupVideo title='How to install on your website' btntext='Video' href='/dashboard/interactive-videos' />
    <HomeAds />
   </div>
   </main>
  )
}

export default DashboardPage