import React, { Suspense } from 'react'
import VideosHeader from '@/components/interactive-videos/videos-header'
import VideosDirectory from '@/components/interactive-videos/videos-directory'
import { getUserVideos } from '@/lib/actions/videos'
import LoadingSkeleton from '@/components/ui/loading'
import { SearchParamsProps } from '@/types'

const VideoListingPage = async (props:SearchParamsProps) => {
  let criteria = {}
  if(props.searchParams.q){
    criteria = {title: props.searchParams.q}
  }
  const response = await getUserVideos(criteria)
  return (
    <main className="w-full flex-grow overflow-x-hidden overflow-y-auto padding-x-container py-14">
      <VideosHeader />
     <Suspense fallback={<LoadingSkeleton />}>
     <VideosDirectory videos={response.data} />
     </Suspense>
    </main>
  )
}

export default VideoListingPage