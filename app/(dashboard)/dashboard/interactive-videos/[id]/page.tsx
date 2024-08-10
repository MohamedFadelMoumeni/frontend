import React, { memo } from "react"
import LoadingSkeleton from "@/components/ui/loading"
import { Suspense } from "react"
import VideoEdit from "@/components/video-editing"
import { getUserVideoById } from "@/lib/actions/videos"

type Props = {
  params : { id : string}
}

const VideoEditingPage = async (props:Props) => {
  const response = await getUserVideoById(props.params.id)
   console.log(response)
  
  return (
    <Suspense fallback={<LoadingSkeleton />}>
    <VideoEdit video={response.data} />
    </Suspense>


  )
}

export default VideoEditingPage