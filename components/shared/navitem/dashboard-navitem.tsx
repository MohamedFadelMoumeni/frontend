'use client'
import React, {useState, ReactElement} from 'react'
import Link from 'next/link'
import { LuLayoutDashboard } from "react-icons/lu";


type PropsType = {
    title : string;
    link : string
    isActive: boolean
    icon: ReactElement
    isOpen: boolean
}
const DashboardNavIem = (props : PropsType) => {
    const [isHover , setIsHover] = useState(false)
    const hoverChange = () => {
        setIsHover((prev) => !prev)
    }
  return (
    <Link href={props.link} className={`w-full relative ${props.isActive ? "nav-link-active text-primary medium-13" : 'regular-13 text-gray-600'}`}>
       <div className={`py-3 px-2 flex items-center  md:gap-3 `} onMouseEnter={hoverChange} onMouseLeave={hoverChange}>
       {props.icon}
       <span className={` ${props.isOpen ? 'lg:inline' : 'hidden'} `}>{props.title}</span>
       </div>
    </Link>
  )
}

export default DashboardNavIem