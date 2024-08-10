import React from 'react'
import { VideoUpload } from './video-upload'
import VideoSearch from './video-search'

const VideosHeader = () => {
  return (
    <div className='w-full flex items-center justify-between flex-wrap gap-4'>
        <h1 className='semibold-2xl'>Interactive videos</h1>
        <div className='flex items-center w-full md:w-fit gap-4'>
        <div className='flex items-center gap-2 w-full md:w-fit '>
          <VideoSearch />
        </div>
        <VideoUpload />
        </div>
    </div>
  )
}

export default VideosHeader