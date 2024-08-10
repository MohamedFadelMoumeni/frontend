import React from 'react'
import { IoIosArrowRoundForward } from "react-icons/io";
import Link from 'next/link';

type Props = {
    title : string
    btntext : string
    href : string
}

const GroupVideo = (props : Props) => {
  return (
    <div className='w-full gap-6 p-6 bg-white rounded-xl flex flex-col text-primary border shadow-md'>
        <h1 className='semibold-xl text-black'>{props.title}</h1>
        <Link href={props.href} className="flex items-center gap-1 medium-14">
            <span>{props.btntext}</span>
            <IoIosArrowRoundForward size={25} />
        </Link>
    </div>
  )
}

export default GroupVideo