import React from 'react'
import Link from 'next/link'
import { ForgotPasswordForm } from '@/components/shared/forms/forgot-password.form'

const ForgotPasswordPage = () => {
  return (
    <div className='h-full w-full mt-16 flex flex-col items-center justify-center gap-6 '>
     <div className='w-full flex flex-col items-center justify-center  flex-grow'>
     <div className='mb-4'>
      <h1 className='text-2xl font-semibold'>Forgot password</h1>
      </div>
      <ForgotPasswordForm />
      <div className="mt-6 space-y-4">
        <p className='regular-14'>Have an account? <Link href="/sign-in" className='underline semibold-14'>login here</Link></p>
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

export default ForgotPasswordPage