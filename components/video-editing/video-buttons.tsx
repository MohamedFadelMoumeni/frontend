"use client"
import React from 'react'
import { Input } from '../ui/input'
import { Label } from '../ui/label'
import { Button } from '../ui/button'
import { MdDelete } from "react-icons/md";
import { ButtonType } from '@/types'
import { v4 as uuidv4 } from 'uuid'

type Props = {
    buttons : ButtonType[],
    setButtons : React.Dispatch<React.SetStateAction<ButtonType[]>>
}


const VideoButtons = (props:Props) => {
    const { buttons, setButtons } = props;

    const handleDeleteButton = (btn:ButtonType) => {
        setButtons(buttons.filter(button => button.id!== btn.id))
    }

    const handleAddButton = () => {
        if(props.buttons.length <3){
        setButtons([...buttons, { id: uuidv4() ,text: `Button ${buttons.length+1}`, link: '' }]);
        }
    }


    const handleTextChange = React.useCallback((buttonId:string , e:React.ChangeEvent<HTMLInputElement>) => {
        const newButtons = props.buttons.map(btn => btn.id === buttonId ? {...btn, text: e.target.value} : btn);
        setButtons(newButtons);
      }, [buttons, setButtons]);
      const handleLinkChange = React.useCallback((buttonId:string , e:React.ChangeEvent<HTMLInputElement>) => {
        const newButtons = props.buttons.map(btn => btn.id === buttonId ? {...btn, link: e.target.value} : btn);
        setButtons(newButtons);
      }, [buttons, setButtons]);
  return (
    <div className='w-full flex flex-col '>
        <h3 className='semibold-16'>Featured Links</h3>
        <p className='text-sm my-4 text-gray-700'>Add product or page links below to feature them in your video.
        </p>
              {
                    props.buttons.map((button) => (
                        <div key={button.id} className='w-full flex items-center justify-between md:justify-start gap-2 my-2 '>
                        <div className='flex flex-col gap-1 '>
                        <Label className='text-[11px] !font-semibold'>Button text</Label>
                        <Input name="text" onChange={(e) => handleTextChange(button.id, e)} value={button.text}  type='text' className='no-focus'  />
                        </div>
                        <div className='flex flex-col gap-1 '>
                            <Label className='text-[11px] !font-semibold'>Link</Label>
                            <Input onChange={(e) => handleLinkChange(button.id, e)} placeholder='https://example.com' value={button.link} type='url' className='no-focus' />
                         </div>
                         <MdDelete onClick={() => handleDeleteButton(button)} size={25} className='min-w-[25px]  mt-5 cursor-pointer'/>
                         </div>
                    ))
                }

        <Button type='button' disabled={props.buttons.length === 3} onClick={handleAddButton} className='w-fit text-sm mt-3'>
            {props.buttons.length === 3? 'Max limit reached' : 'Add'}
        </Button>
    </div>
  )
}

export default VideoButtons