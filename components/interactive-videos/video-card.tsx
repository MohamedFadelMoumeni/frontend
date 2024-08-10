import React from 'react'
import { Card } from '@/components/ui/card'
import Link from 'next/link'
import { PlayBackType, VideoType } from '@/types'
import Image from 'next/image'
import { Badge } from "@/components/ui/badge"
import { formatDate } from '@/lib/utils'
import VideoDelete from './video-delete'


type Props = {
  video : VideoType
}

const VideoCard = (props : Props) => {
  const { video } = props
  const createdAt = formatDate(video.createdAt)
  return (
    <Card className="w-full cursor-pointer">
      <Link href={`/dashboard/interactive-videos/${video._id}`}>
      <Image placeholder='blur' blurDataURL="iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mNkeCFfDwADfwGI6L368wAAAABJRU5ErkJggg=="  src={video.url.replace('mp4', 'png')} width={300} height={200} alt='video' className='w-full h-[200px] object-cover' />
        <div className="w-full py-3 px-3 bg-white">
            <h3 className="text-sm_normal truncate">{video.title || "Video"}</h3>
            <div className="w-full flex flex-wrap items-center justify-between">
            <Badge variant="outline" className='hidden md:flex text-[11px] mt-2 bg-gray-200 font-normal '>Uploaded at {createdAt}</Badge>
            </div>
        </div>
        </Link>
        <VideoDelete videoId={video._id} />
        </Card>
  )
}

export default VideoCard