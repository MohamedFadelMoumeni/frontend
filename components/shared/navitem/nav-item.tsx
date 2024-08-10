import React from 'react'
import Link from 'next/link'

type NavItemType = {
    title : string;
    link : string
}

const NavItem = ({title, link} : NavItemType) => {
  return (
   <Link href={link} className='regular-13'>{title}</Link>
  )
}

export default NavItem