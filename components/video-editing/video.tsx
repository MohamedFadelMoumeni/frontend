import React, { LegacyRef, useRef, useState } from 'react'
import { FaRegPlayCircle, FaRegPauseCircle } from "react-icons/fa";
import { FaCirclePause, FaCirclePlay } from "react-icons/fa6";
import { IoVolumeMute , IoVolumeHigh} from "react-icons/io5";


type Props = {
  url: string
}

const Video = (props : Props) => {
    const videoRef = useRef<HTMLVideoElement>(null)
    const [isPlaying, setIsPlaying] = useState(false)
    const [hover, setHover] = useState(false)
    const [isMuted, setIsMuted] = useState(false)

    const handleSound = () => {
        if(videoRef.current){
            videoRef.current.muted = !isMuted
            setIsMuted(!isMuted)
        }
    }

    const handlePlayPause = () => {
        if(isPlaying){
            setIsPlaying(false);
            videoRef.current?.pause()
        }else {
            setIsPlaying(true);
            videoRef.current?.play()
        }
    }

  return (
   <>
    {
        hover && <div onClick={handlePlayPause} className='cursor-pointer absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2  text-white z-50'>
            {isPlaying ? <FaCirclePause size={40} /> : <FaCirclePlay size={40} />}
        </div>
    }
    {
      <div onClick={handleSound} className='cursor-pointer absolute top-5 left-5 p-2 bg-black/60 rounded-lg z-50'>
        {isMuted ? <IoVolumeMute size={20} className='text-white'/> : <IoVolumeHigh size={20} className='text-white' />}
      </div>
    }
   <video  src={props.url} onClick={handlePlayPause} onMouseLeave={() => setHover(false)} onMouseEnter={() => setHover(true)} ref={videoRef}  playsInline className='rounded-3xl h-full w-full object-cover absolute top-0 right-0 left-0 bottom-0'>
   </video>
   </>
  )
}

export default Video