import React, { useState } from 'react'
import { Input } from '../ui/input'
import { Label } from '../ui/label'
import { ColorType } from '@/types'
import { SketchPicker } from 'react-color';

type Props = {
  colors : ColorType,
  setColors : React.Dispatch<React.SetStateAction<ColorType>>
}
const VideoFormat = (props:Props) => {
    const {setColors, colors} = props
    const [isColorDisplay, setIsColorDisplay] = useState(false)
  const handleColorChange = (event: { target: { value?: any; name?: any } }) => {
    const { name } = event.target;
    props.setColors((prevColors) => ({...prevColors, [name]: event.target.value }))
  }
  return (
    <div className='flex flex-col cols-span-4'>
        <h3 className='semibold-16'>Video Design</h3>
        <p className='text-sm my-4 text-gray-700'>Add product or page links below to feature them in your video.
        </p>
        <div className='w-full p-2 flex items-center justify-between gap-2 flex-wrap'>
          <div className='flex flex-col gap-1'>
          <Label className='text-[11px] !font-semibold text-center'>Text color</Label>
            <Input name='textColor' onChange={handleColorChange} value={props.colors.textColor} type='color' className='w-[100px]' />
          </div>
          <div className='flex flex-col gap-1'>
          <Label className='text-[11px] !font-semibold text-center'>Background color</Label>
          <div className='w-[100px] rounded-xl p-3 border cursor-pointer relative'>
            <div className='w-full p-2' onClick={() => setIsColorDisplay(!isColorDisplay)} style={{
              backgroundColor: `rgba(${props.colors.bgColor.r}, ${props.colors.bgColor.g}, ${props.colors.bgColor.b}, ${props.colors.bgColor.a})`
            }} />
          <div className='absolute z-10'>
          {
              isColorDisplay &&    <SketchPicker color={props.colors.bgColor} onChange={(e) => setColors({...colors, bgColor : {r:e.rgb.r, g:e.rgb.g, b:e.rgb.b, a:e.rgb.a} })} />

            }
          </div>
          </div>
          </div>
          <div className='flex flex-col gap-1'>
          <Label className='text-[11px] !font-semibold text-center'>Border color</Label>
            <Input name='borderColor' onChange={handleColorChange} value={props.colors.borderColor} type='color' className='w-[100px]' />
          </div>
         
        </div>

    </div>
  )
}

export default VideoFormat