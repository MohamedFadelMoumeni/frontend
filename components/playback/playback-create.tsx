"use client"
import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { IoCreateOutline } from "react-icons/io5";
import 'react-dropzone-uploader/dist/styles.css'
import Dropzone, {IMeta} from 'react-dropzone-uploader'


export function PlaybackCreate() {

    const getUploadParams = ({ meta }: {meta : IMeta}) => { return { url: 'https://httpbin.org/post' } }
  
    // called every time a file's `status` changes
    const handleChangeStatus = () => { console.log("hello") }
    
    // receives array of files that are done uploading when submit button is clicked
    const handleSubmit = (files: any[], allFiles: any[]) => {
      console.log(files.map((f: { meta: any }) => f.meta))
      allFiles.forEach((f: { remove: () => any }) => f.remove())
    }
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button className="regular-13 gap-2">
        <IoCreateOutline size={18} />
            Create
            
            </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[550px]">
        <DialogHeader>
          <DialogTitle className="semibold-16">Upload a video</DialogTitle>
        </DialogHeader>
        <Dropzone
        maxFiles={1}
      getUploadParams={getUploadParams}
      onChangeStatus={handleChangeStatus}
      onSubmit={handleSubmit}
      accept="image/*,audio/*,video/*"
    />

      </DialogContent>
    </Dialog>
  )
}
