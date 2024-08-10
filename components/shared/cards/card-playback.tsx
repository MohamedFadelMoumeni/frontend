import React from 'react'
import { Card } from '@/components/ui/card'
import Link from 'next/link'
import { PlayBackType } from '@/types'
import Image from 'next/image'

const CardPlayBack = () => {
  return (
    <Card className="w-full cursor-pointer h-[250px]">
      <Link href={`/dashboard/interactive-videos/11`}>
      <Image placeholder='blur' blurDataURL="iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mNkeCFfDwADfwGI6L368wAAAABJRU5ErkJggg=="  src='https://res.cloudinary.com/wxd/video/upload/v1721129006/ctpkir0oud6wtg4rdnjf.png' width={300} height={200} alt='video' className='w-full h-[80%] object-cover ' />
        <div className="w-full py-3 px-3 bg-white">
            <h3 className="text-sm_normal">Playback #1</h3>
        </div>
        </Link>
        </Card>
  )
}

export default CardPlayBack