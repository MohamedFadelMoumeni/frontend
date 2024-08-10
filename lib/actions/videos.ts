"use server"
import { BACKEND_URL } from "@/constants/config";
import { ButtonType, ColorType, VideoFilterType, VideoType } from "@/types";
import { revalidateTag } from "next/cache";
import {get, post, remove, update} from '../fetch'

export const uploadVideo = async (formData: FormData) => {
   const resp = await post('/videos/upload', formData);
   console.log(resp)
  revalidateTag("videos")
  return {
    statusCode : resp.status,
    data : resp
  };
  
}

export const getUserVideos = async (filters : VideoFilterType) => {
  let path = filters.title ? `/videos?title=${filters.title.toLocaleLowerCase()}` :`/videos`
  const tags = filters.title ? `videos-${filters?.title}` :`videos`
    const resp = await get(path, [tags])
    return {
      statusCode : 200,
      data : resp
    };

}

export const updateVideo = async (video : VideoType) => {
  const resp = await update(`/videos/${video._id}`, video)
  return {
    succ : resp.status,
    data : resp
  }

}

export const getUserVideoById = async (videoId : string) => {

    const resp = await get(`/videos/${videoId}`)
    return {
      statusCode : 200,
      data : resp
    };

  

}

export const getSubVideosByVideoId =async (videoId : string) => {
  const resp = await fetch(`${BACKEND_URL}/videos/subvideos/${videoId}`, {
    method:"GET",
    headers : {
      "Authorization":"Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2Njg2YzAzNjJmZDNlNWI2YWYyNzBkODkiLCJlbWFpbCI6Im1vaGFtZWRmYWRlbG1vdW1lbmlAZ21haWwuY29tIiwiaWF0IjoxNzIwMTA3NzU5fQ.U4GMtDW9R4ZtUPxlFKJSpyiuQd6-CKuClh3LKPQ0u-g"
    },
    cache:"no-cache"
  })
  const respJson = await resp.json();
  return {
    statusCode : resp.status,
    data : respJson
  };

}

export const getVideoList = async () => {
  const resp = await fetch(`${BACKEND_URL}/videos/list`, {
    method:"GET",
    headers : {
      "Authorization":"Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2Njg2YzAzNjJmZDNlNWI2YWYyNzBkODkiLCJlbWFpbCI6Im1vaGFtZWRmYWRlbG1vdW1lbmlAZ21haWwuY29tIiwiaWF0IjoxNzIwMTA3NzU5fQ.U4GMtDW9R4ZtUPxlFKJSpyiuQd6-CKuClh3LKPQ0u-g"
    },
    cache:"no-cache"
  })
  const respJson = await resp.json();
  return {
    statusCode : resp.status,
    data : respJson
}
}

export const deleteVideo = async (videoId: string) => {
  const resp = await remove(`/videos/${videoId}`)
  revalidateTag("videos")
  return {
    statusCode : resp.status,
    data : resp
}
}

export const revalidateVideos = () => revalidateTag("videos")

export const revalidateVideo = (videoId:string) => revalidateTag(`videos-${videoId}`)