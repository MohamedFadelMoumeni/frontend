"use client"
import React from 'react'
import { MdDelete } from "react-icons/md";
import {
    AlertDialog,
    AlertDialogAction,
    AlertDialogCancel,
    AlertDialogContent,
    AlertDialogDescription,
    AlertDialogFooter,
    AlertDialogHeader,
    AlertDialogTitle,
    AlertDialogTrigger,
  } from "@/components/ui/alert-dialog"

import { deleteVideo } from '@/lib/actions/videos';
  type Props = {
    videoId : string
  }

const VideoDelete = (props : Props) => {

    const handVideoDelete = async () => {
        try {
            const response = await deleteVideo(props.videoId)
        }catch(e){
        console.log(e)
        }
    }
  return (
   <div className='z-50 px-4'>
    <AlertDialog>
  <AlertDialogTrigger>
    <MdDelete className='text-gray-500 cursor-pointer' size={20} />
  </AlertDialogTrigger>
  <AlertDialogContent>
    <AlertDialogHeader>
      <AlertDialogTitle>Are you absolutely sure?</AlertDialogTitle>
      <AlertDialogDescription>
        This action cannot be undone. This will permanently delete your account
        and remove your data from our servers.
      </AlertDialogDescription>
    </AlertDialogHeader>
    <AlertDialogFooter>
      <AlertDialogCancel>Cancel</AlertDialogCancel>
      <AlertDialogAction onClick={handVideoDelete}>Delete</AlertDialogAction>
    </AlertDialogFooter>
  </AlertDialogContent>
</AlertDialog>
   </div>
  )
}

export default VideoDelete