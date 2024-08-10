import React from 'react'
import { IoVideocamOutline, IoClose } from "react-icons/io5";
import { bytesToMegabytes } from '@/lib/utils';



type Props = {
    path: string;
    size : number
    cleanFile : () => void
}

const VideoListing = (props : Props) => {
  return (
    <div className="w-full flex items-center justify-between">
        <div className='flex items-center gap-2'>
        <IoVideocamOutline />
        <p className='text-[12px] font-medium'>{props.path}</p>
        <p className='text-[12px] font-medium'>{bytesToMegabytes(props.size)}M</p>
        </div>
        <IoClose className='cursor-pointer' onClick={props.cleanFile} />

    </div>
  )
}

export default VideoListing