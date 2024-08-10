"use client"
import React, { useEffect } from 'react'
import VideoButtons from './video-buttons'
import VideoFormat from './video-format'
import VideoPreview from './video-preview'
import VideoTexts from '../interactive-videos/video-texts'
import { ButtonType , ColorType, VideoType} from '@/types'
import { v4 as uuidv4 } from 'uuid'
import VideoCardHeader from '../interactive-videos/video-card-header'
import VideoSnippet from './video-snippet'

type Props = {
  video : VideoType
}

const INTIAL_STATE : ButtonType = {
    id : uuidv4(),
    text: 'Button 1',
    link:''
}


const VideoEdit = (props : Props) => {
  const { video } = props

    const [buttons, setButtons] = React.useState<ButtonType[]>(
        [INTIAL_STATE]
    ) 
    const [texts, setTexts] = React.useState({
      title : '',
      subtitle :''
    })
    const [colors, setColors] = React.useState<ColorType>({
      textColor: '#ffffff',
      bgColor: {r:0, g:0, b:0, a:1},
      borderColor: '#ffffff'
    })

    useEffect(() => {
      if(video) {
        if(video.buttons.length > 0){
          setButtons(video.buttons)
        }
        setColors({
          bgColor: video.bgColor,
          textColor: video.textColor,
          borderColor: video.borderColor
        })
        setTexts({
          title: video.title || '',
          subtitle: video.description  ||''
        })

      }
    }, [video])

  return (
    <main className="w-full padding-x-container py-20 ">
      <VideoCardHeader video={video} colors={colors} texts={texts} buttons={buttons} />
    <div className="w-full flex flex-wrap gap-6 mt-6 ">
      <div className="w-full lg:flex-1 gap-8 grid  md:grid-cols-2">
      <VideoTexts texts={texts} setTexts={setTexts}  />
      <VideoButtons buttons={buttons} setButtons={setButtons} />
      <VideoFormat setColors={setColors} colors={colors} />
      <VideoSnippet />
      </div>
      <div className='relative h-[550px] mx-auto '>
      <VideoPreview url={video.url} texts={texts} colors={colors} setColors={setColors} buttons={buttons} />
      </div>
    </div>
      
    </main>
  )
}

export default VideoEdit