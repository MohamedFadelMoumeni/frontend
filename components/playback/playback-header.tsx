import React from 'react'
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
  } from "@/components/ui/select"

const PlaybackHeader = () => {
  return (
    <div className='w-full flex items-center justify-between flex-wrap gap-2'>
        <h1 className='semibold-2xl'>Playbacks</h1>
        <div className='flex items-center w-full md:w-fit gap-8'>
        <div className='flex items-center gap-2 w-full md:w-fit'>
        <Select>
  <SelectTrigger className="w-1/2 gap-2 md:w-[180px] no-focus">
    <SelectValue placeholder="Theme" />
  </SelectTrigger>
  <SelectContent>
    <SelectItem value="light">Light</SelectItem>
    <SelectItem value="dark">Dark</SelectItem>
    <SelectItem value="system">System</SelectItem>
  </SelectContent>
</Select>
<Select>
  <SelectTrigger className="w-1/2 gap-2 md:w-[180px] no-focus">
    <SelectValue placeholder="Theme" />
  </SelectTrigger>
  <SelectContent>
    <SelectItem value="light">Light</SelectItem>
    <SelectItem value="dark">Dark</SelectItem>
    <SelectItem value="system">System</SelectItem>
  </SelectContent>
</Select>
        </div>

        </div>
    </div>
  )
}

export default PlaybackHeader