import React from 'react'
import CardPlayBack from '../shared/cards/card-playback'

const PlaybackDirectory = () => {
  return (
    <div className='w-full grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 mt-14'>
        <CardPlayBack />
        <CardPlayBack />
        <CardPlayBack />
        <CardPlayBack />
        <CardPlayBack />
        <CardPlayBack />
        <CardPlayBack />
        <CardPlayBack />
    </div>
  )
}

export default PlaybackDirectory