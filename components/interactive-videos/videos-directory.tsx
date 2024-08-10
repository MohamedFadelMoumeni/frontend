import React from 'react'
import VideoCard from './video-card'
import { VideoType } from '@/types'


type Props = {
  videos : VideoType[]
}
const VideosDirectory = (props:Props) => {
  const { videos } = props
  return (
    <>
    {
      videos.length > 0 ?
      <div className='w-full grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 mt-14 '>
        {
          videos.map((video) => (
            <VideoCard key={video._id} video={video} />
          ))
        }
    </div>
    :
    <div className='w-full mt-10'>
      <h1 className='text-center regular-14'>No Videos , please upload your videos</h1>
    </div>
    }
    </>
  )
}

export default VideosDirectory