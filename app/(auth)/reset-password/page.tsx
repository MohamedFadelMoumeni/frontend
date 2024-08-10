import { ResetPasswordForm } from '@/components/shared/forms/reset-password.form'
import React from 'react'
import Link from 'next/link'
import { SearchParamsProps } from '@/types'
import { redirect } from 'next/navigation'

const SignInPage = async (props: SearchParamsProps) => {
    if(!props.searchParams.token){
        redirect('/sign-in')
  
    }
  return (
    <div className='h-full w-full mt-16 flex flex-col items-center justify-center gap-6  '>
      <div className='w-full flex flex-col items-center justify-center flex-grow '>
      <div className='mb-4'>
      <h1 className='text-2xl font-semibold'>Reset your password </h1>
      </div>
      <ResetPasswordForm token={props.searchParams.token} />
      <div className="mt-6 space-y-3">
        <p className='regular-14'> <Link href="/sign-in" className='underline semibold-14'>Back to login</Link></p>
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