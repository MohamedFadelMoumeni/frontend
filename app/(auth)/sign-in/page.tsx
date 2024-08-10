import { LoginForn } from '@/components/shared/forms/login.form'
import React from 'react'
import Link from 'next/link'

const SignInPage = async () => {
  return (
    <div className='h-full w-full mt-16 flex flex-col items-center justify-center gap-6  '>
      <div className='w-full flex flex-col items-center justify-center flex-grow '>
      <div className='mb-4'>
      <h1 className='text-2xl font-semibold'>Sign in to your account </h1>
      </div>
      <LoginForn />
      <div className="mt-6 space-y-3">
        <p className='regular-14'>Dont have an account? <Link href="/sign-up" className='underline semibold-14'>Signup here</Link></p>
        <p className='regular-14'>Forgot the password? <Link href="/forgot-password" className='underline semibold-14'>Reset here</Link></p>
      </div>
      </div>
      <div className='w-full py-4 mb-8 flex items-center justify-center gap-4 flex-wrap'>
       <p className='text-gray-500 semibold-14'>&copy; PlayTok {new Date().getFullYear()}</p>
       <Link href="#" className='text-gray-500 semibold-14'>
       Terms of service
       </Link>
       <Link href="#" className='text-gray-500 semibold-14'>
       Privacy policy
       </Link>
     </div>
    </div>
  )
}

export default SignInPage