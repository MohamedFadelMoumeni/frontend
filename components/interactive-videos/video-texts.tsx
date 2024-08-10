import React from 'react'
import { Input } from '../ui/input'
import { Label } from '../ui/label'
import { Textarea } from "@/components/ui/textarea"


type Props = {
    texts : {title: string, subtitle: string},
    setTexts : React.Dispatch<React.SetStateAction<{title: string, subtitle: string}>>
}

const VideoTexts = (props:Props) => {

    const handleTextChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const {name} = e.target;
        props.setTexts({...props.texts, [name] : e.target.value});
    }
  return (
    <div className='w-full flex flex-col'>
    <h3 className='semibold-16'>Title & Subtitle</h3>
    <p className='text-sm my-4 text-gray-700'>Add product or page links below to feature them in your video.
    </p>
    <div className='w-full flex flex-col gap-2'>
        <div className='flex flex-col gap-1 '>
            <Label className='text-[11px] !font-semibold'>Title</Label>
            <Input placeholder='Optional' onChange={handleTextChange} name='title' value={props.texts.title} type='text' className='no-focus ' />
        </div>
        <div className='flex flex-col gap-1 '>
            <Label className='text-[11px] !font-semibold'>Subtitle</Label>
            <Textarea placeholder='Optional' onChange={handleTextChange} name='subtitle' value={props.texts.subtitle} className='no-focus' />

        </div>
    </div>
</div>
  )
}

export default VideoTexts