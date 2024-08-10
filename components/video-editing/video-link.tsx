import React from 'react'
import { Input } from '../ui/input'
import { Label } from '../ui/label'
import { Select } from '../ui/select'
import { Button } from '../ui/button'
import { MdDelete } from "react-icons/md";


const VideoLink = () => {
  return (
    <div className='w-full flex flex-col'>
        <h3 className='semibold-16'>Link Videos</h3>
        <p className='text-sm my-4 text-gray-700'>Add product or page links below to feature them in your video.
        </p>
        <div className='w-full flex items-center gap-2'>
            <div className='flex flex-col gap-1 '>
                <Label className='text-[11px] !font-semibold'>Button text</Label>
                <Input type='text' className='no-focus ' />
            </div>
            <div className='flex flex-col gap-1 '>
                <Label className='text-[11px] !font-semibold'>Select video</Label>
                <Input type='text' className='no-focus' />
            </div>
            <MdDelete size={25} className='max-w-[25px]  mt-5 cursor-pointer'/>
        </div>
        <Button className='w-fit text-sm mt-3'>Add</Button>
    </div>
  )
}

export default VideoLink