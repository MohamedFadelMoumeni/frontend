import React from 'react'
import NavItem from '../navitem/nav-item'
import { AuthButtons } from './auth-buttons'

const AuthNavBar = () => {
  return (
    <header className='w-full flex items-center justify-between  py-6 '>
        <h1 className='text-lg '>PlayTok</h1>
        <div className='flex items-center justify-between gap-8'>
        <NavItem title='Home' link='/'/>
        <NavItem title='About' link='/'/>
        <NavItem title='Home' link='/'/>
        <AuthButtons />
        </div>
    </header>
  )
}

export default AuthNavBar