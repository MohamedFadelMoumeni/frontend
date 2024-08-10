import { authenticated } from '@/lib/actions/auth'
import React from 'react'
import { redirect } from 'next/navigation'
import Image from 'next/image'
import Logo from '@/components/ui/logo'
const RootLayout = async ({children} : { children: React.ReactNode }) => {
  const isAuthenticared = await  authenticated()
  if(isAuthenticared) redirect('/dashboard')
  return (
    <main className='w-full h-screen relative grid  md:grid-cols-3'>
      <div className='hidden md:flex col-span-2 h-full relative'>
        <Image 
        src='/assets/bg.png'
        layout='fill'
        alt='hello'
        className='object-cover z-30'
        />
        <div className='absolute z-50 top-0 right-0 left-0 bottom-0 text-white flex flex-col justify-center px-20' style={{backgroundColor:"rgba(0,0,0,.8)"}}>
        
          <h1 className='text-3xl font-semibold mb-3 lg:w-[70%]'>Leverage your existing social content on your website in minutes.
          </h1>
          <h4 className=' text-md font-regular lg:w-[85%]'>
          You already have the content, it&apos;s time to get the most use out of it. Ghost lets you upload videos you&apos;ve already created and tag products, converting them into Interactive Videos that you can use on your website.

          </h4>
        </div>

      </div>
      <div className='col-span-1 flex flex-col items-center justify-center px-8 relative'>
        <div className='absolute top-10 left-10'>
          <Logo />
        </div>
       {children}
       </div>
    </main>
  )
}

export default RootLayout