import React from 'react'
import { ButtonType, ColorType } from '@/types'
import { RiExternalLinkLine } from "react-icons/ri";
import Link from 'next/link';

type Props = {
  colors : ColorType,
  button : ButtonType

}
const VideoButton = (props:Props) => {
  return (
    <Link
    href={props.button.link}
    target='_blank'
    style={{
      backgroundColor: `rgba(${props.colors.bgColor.r}, ${props.colors.bgColor.g},${props.colors.bgColor.b},${props.colors.bgColor.a})`,
      color: props.colors.textColor,
      borderColor: props.colors.borderColor,
      borderWidth: 1,
      borderStyle:'solid',
      transition: 'all 0.2s ease-in-out',
      
    }}
     className={`prevent-text w-full rounded-full py-3 px-5 cursor-pointer flex items-center gap-1 shadow-md hover:-translate-y-1.5` }>
        <RiExternalLinkLine  size={15}/>
        <p className='font-normal text-[12.5px]'>{props.button.text}</p>
    </Link>
  )
}

export default VideoButton