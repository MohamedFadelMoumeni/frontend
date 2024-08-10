"use server"
import { BACKEND_URL } from "@/constants/config"


export const getPlayBack = async () => {
    const resp = await fetch(`${BACKEND_URL}/playbacks`, {
        method:"GET",
        headers : {
          "Authorization":"Bearer eyJhbGciOixJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2Njg2YzAzNjJmZDNlNWI2YWYyNzBkODkiLCJlbWFpbCI6Im1vaGFtZWRmYWRlbG1vdW1lbmlAZ21haWwuY29tIiwiaWF0IjoxNzIwMTA3NzU5fQ.U4GMtDW9R4ZtUPxlFKJSpyiuQd6-CKuClh3LKPQ0u-g"
        },
       next:{tags:["playback"]},
       cache: "no-cache"
      })
      const respJson = await resp.json();
      return {
        statusCode : resp.status,
        data : respJson
      };
}

export const getPlayBackById = async (id:string) => {
    const resp = await fetch(`${BACKEND_URL}/playbacks/${id}`, {
        method:"GET",
        headers : {
          "Authorization":"Bearer eyJhbGciOixJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2Njg2YzAzNjJmZDNlNWI2YWYyNzBkODkiLCJlbWFpbCI6Im1vaGFtZWRmYWRlbG1vdW1lbmlAZ21haWwuY29tIiwiaWF0IjoxNzIwMTA3NzU5fQ.U4GMtDW9R4ZtUPxlFKJSpyiuQd6-CKuClh3LKPQ0u-g"
        },
        next : {tags: ["playback"]},
        cache: "no-cache"
      })
      const respJson = await resp.json();
      return {
        statusCode : resp.status,
        data : respJson
      };
}