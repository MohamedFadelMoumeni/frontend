import { ButtonType, ColorType, VideoType } from '@/types'
import React, { useState } from 'react'
import { revalidateVideo, updateVideo } from '@/lib/actions/videos'
import { useToast } from '../ui/use-toast'
import { Button } from '../ui/button'
import { cn } from '@/lib/utils'

type Props = {
    video: VideoType;
    buttons : ButtonType[];
    colors : ColorType;
    texts : {title: string, subtitle: string},
}

const VideoCardHeader = (props:Props) => {
    const {toast} = useToast()
    const [isLoading , setIsLoading] = useState(false)

    const updateVideoHandler = async () => {
      setIsLoading(true)
        const data = {
          ...props.video,
          buttons : props.buttons,
          ...props.colors,
          ...props.texts,
          description : props.texts.subtitle
  
        }
        const response = await updateVideo(data)
        if(response.data) {
          toast({
            title: "Update video success",
            className : cn("top-0 right-0 flex fixed md:max-w-[420px] md:top-4 md:right-4 bg-green-600 text-white text-lg")
          })
          revalidateVideo(response.data._id)
        }else{
          toast({
            title: "Update video failed",
            className : cn("top-0 right-0 flex fixed md:max-w-[420px] md:top-4 md:right-4 bg-red-600 text-white text-lg")
          })
  
        }
        setIsLoading(false)
      }

  return (
    <div className='w-full flex items-center flex-wrap justify-between gap-2'>
    <h1 className='text-2xl md:text-3xl font-bold'>Edit your video</h1>
    <Button disabled={isLoading} type='button' className='text-sm' onClick={updateVideoHandler}>
      {
        isLoading? "Updating..." : "Update"
      }
    </Button>
    </div>
  )
}

export default VideoCardHeader