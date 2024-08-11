"use client"
import React, {useCallback} from "react";
import { Button } from "@/components/ui/button"
import VideoListing from "./video-listing";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { IoCreateOutline } from "react-icons/io5";
import { useToast } from "../ui/use-toast";
import { Card, CardContent, CardFooter } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "../ui/label";
import { MdOutlineOndemandVideo } from "react-icons/md";
import { useState } from "react";
import {  uploadVideo } from "@/lib/actions/videos";
import {useDropzone} from 'react-dropzone'



export function VideoUpload() {

  const {toast} = useToast()
  const [file , setFile] = useState<File|null>(null)
  const [isLoading, setIsLoading] = useState<boolean>(false)

  const onDrop = useCallback((acceptedFiles: File[]) => {
    const file = acceptedFiles[0]
    setFile(file)
    console.log(file)
  }, [])
  const {getRootProps, getInputProps} = useDropzone({
    accept: {
      'video/mp4': ['.mp4']
    },
    maxFiles: 2,
    maxSize: 10485760,
    onDrop
  })

  const cleanFile = () => {
    setFile(null)
  }

  
  const handleVideo = () => {
   if(file){
    console.log("This is file : ", file)

    setIsLoading(true)
    const form = new FormData()
    form.append("file", file)
    console.log(form)
    uploadVideo(form)
    .then((resp) => {
       if(resp){
        toast({
          title: "Video uploaded successfully",
          className : "top-0 right-0 flex fixed md:max-w-[420px] md:top-4 md:right-4 bg-green-600 text-white text-lg"
        })
       }else {
        toast({
          title: "Failed to upload video",
          className : "top-0 right-0 flex fixed md:max-w-[420px] md:top-4 md:right-4 bg-red-600 text-white text-lg"
        })
       }
     })
    .catch((error) => {
       toast({
         title: error.message,
         className : "top-0 right-0 flex fixed md:max-w-[420px] md:top-4 md:right-4 bg-red-600 text-white text-lg"
       })
     })
     .finally(() => {
       setIsLoading(false)
       cleanFile()
     })

   }

  }

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button className="regular-13 gap-2">
        <IoCreateOutline size={18} />
            Upload
            </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[550px]">
        <DialogHeader>
          <DialogTitle className="semibold-16">Upload a video</DialogTitle>
        </DialogHeader>
        <Card>
      <CardContent className="p-6 space-y-4">
        <div {...getRootProps()} className="cursor-pointer border-2 border-dashed border-gray-200 rounded-lg flex flex-col gap-1 p-6 items-center">
        <Input {...getInputProps()} />
        <MdOutlineOndemandVideo size={30} />

          <span className="text-sm font-medium text-gray-500">Drag and drop a file or click to browse</span>
          <span className="text-xs text-gray-500">(Only *.mp4  videos will be accepted, less than 10MB)</span>
        </div>
        {file && <VideoListing cleanFile={cleanFile} path={file.name} size={file.size} />}
      </CardContent>
      <CardFooter>
        <Button disabled={isLoading} onClick={handleVideo} size="sm" className="regular-13">
          {isLoading? "Uploading..." : "Upload"}
        </Button>
      </CardFooter>
    </Card>
      </DialogContent>
    </Dialog>
  )
}
