import React from 'react'
import Link from 'next/link'
import { SearchParamsProps } from '@/types'
import { redirect } from 'next/navigation';
import { verifyEmail } from '@/lib/actions/auth';
import VerificationFailed from '@/components/auth/verification-failed';
import VerificationSuccess from '@/components/auth/verification-success';

const VerifyEmailPage = async (props : SearchParamsProps) => {
    const token = props.searchParams.token;
    if(!token) redirect('/sign-in')
        const response = await verifyEmail(token)
  return (
    <div className='h-full w-full mt-16 flex flex-col items-center justify-center gap-6  '>
    <div className='w-full flex flex-col items-center justify-center flex-grow space-y-6 '>
    <h1 className='text-2xl font-semibold text-center'>Verify your email </h1>
        {
            response.statusCode ? 
            <div>
                {
                    response.statusCode === 200 ?   <VerificationSuccess /> : <VerificationFailed />
                }
            </div> 
            :  <h1 className='text-lg font-semibold '>Verifying your email ... </h1>

        }
    <Link href='/sign-in' className='medium-14 text-center underline'> Back to login</Link>    
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

export default VerifyEmailPage