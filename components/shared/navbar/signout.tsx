'use client'
import { signOut } from '@/lib/actions/auth';
import React from 'react'
import { IoLogOutOutline } from "react-icons/io5";

const signOutHandler = () => {
  signOut()
}

const SignOut = () => {
   
  return (
    <div className='cursor-pointer'onClick={signOutHandler} >
        <IoLogOutOutline size={25} className='hidden md:block' />

    </div>
  )
}

export default SignOut