'use client'
import React, { useState } from 'react'
import DashboardNavIem from '../navitem/dashboard-navitem'
import { usePathname } from 'next/navigation' 
import { dashboardRoutes } from '@/constants/routes'
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { MdSlowMotionVideo } from "react-icons/md";
import Link from 'next/link'
import { IoIosArrowForward, IoIosArrowBack } from "react-icons/io";
import { UserType } from '@/types'
import { formatDate } from '@/lib/utils'


type Props = {
  user : UserType
}

const DashboardSideBar = (props: Props) => {
    const pathname = usePathname()
    const [isOpen, setIsOpen] = useState(false)

    const handleOpenSideBar = () => {
      setIsOpen(!isOpen)
    }
  return (
    <section className={`w-fit ${isOpen && 'lg:w-[270px]'} hidden md:flex flex-col sticky top-0 left-0 bottom-0 py-6 px-3  border-r border-[1px] border-gray-200 z-20`}>
      <div onClick={handleOpenSideBar} className='hidden md:flex cursor-pointer shadow-md w-5 h-5 rounded-full bg-primary  items-center justify-center absolute top-20 -right-3 ' style={{zIndex:9999}}>
        {
          isOpen ? 
            <IoIosArrowBack size={12} className='text-white' />
          : <IoIosArrowForward size={12} className='text-white' />

        }
      </div>
        <div className=" w-full mb-14">
            <Link href='/dashboard' className={`${isOpen ? 'logo' : 'flex  items-center justify-center'}`}>
              <MdSlowMotionVideo className='text-2xl lg:text-lg' />
              <span className={`${isOpen ? 'lg:inline':'hidden'}`}>Play<span className='text-primary'>Tok</span></span>
              </Link>
        </div>
        <div className="w-full flex flex-col space-y-2 grow">
            {dashboardRoutes.map(item => {
                const isActive = pathname == item.link
                return (
                    <DashboardNavIem isOpen={isOpen} key={item.id} title={item.title} link={item.link} isActive={isActive} icon={item.icon} />
                )
            })}
        </div>
        <div className='w-full  flex items-center lg:gap-2 '>
        <Avatar>
          <AvatarImage src="https://github.com/shadcn.png" />
          <AvatarFallback>{props.user.first_name[0]}</AvatarFallback>
        </Avatar>
        <div className={`${isOpen ? 'lg:flex flex-col ga-2' : 'hidden'}   `}>
        <h4 className='medium-14'>{props.user.first_name}</h4>
        <p className='text-[12px] text-gray-500'>Joinded {formatDate(props.user.createdAt)}</p>
        </div>
            
        </div>
    </section>
  )
}

export default DashboardSideBar