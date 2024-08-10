import React from 'react'
import Link from 'next/link'
import { MdSlowMotionVideo } from "react-icons/md";


type Props = {
    isOpen?: boolean

}

const Logo = ({isOpen = true}:Props) => {
  return (
    <Link href='/dashboard' className={`${isOpen ? 'logo' : 'flex  items-center justify-center'}`}>
        <MdSlowMotionVideo className='text-2xl lg:text-lg' />
        <span className={`${isOpen ? 'lg:inline':'hidden'}`}>Play<span className='text-primary'>Tok</span></span>
    </Link>
  )
}

export default Logo