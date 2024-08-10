import { ButtonType, ColorType } from '@/types'
import React from 'react'
import VideoButton from './video-button'
import Video from './video'


type Props = {
    buttons: ButtonType[];
    colors : ColorType;
    setColors : React.Dispatch<React.SetStateAction<ColorType>>;
    texts : {title: string, subtitle: string},
}
const VideoPreview = (props : Props) => {
  return (
    <div className='flex-1 h-full relative'>
        <div className='w-[300px] h-full'>
        <Video texts={props.texts}  />
        </div>
        <div className='absolute bottom-0 right-0 left-0 py-6 px-4 space-y-3'>
          <div className='w-full flex flex-col gap-1 text-white prevent-text'>
          <h1 className='text-md font-medium '>{props.texts.title}</h1>
          <p className='font-normal text-[13px]'>{props.texts.subtitle}</p>
          </div>
            {props.buttons.map(button => (
                <VideoButton  colors={props.colors} button={button} key={button.id} />
            ))}
        </div> 

    </div>
  )
}

export default VideoPreview