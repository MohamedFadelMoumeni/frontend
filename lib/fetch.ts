import { cookies } from "next/headers";
import { BACKEND_URL } from "@/constants/config";
import { revalidateTag } from "next/cache";


export const getHeaders = () => ({
    Cookie: cookies().toString(),
  });

  
export const get =  async (path: string, tags?:string[]) => {
    const resp = await fetch(`${BACKEND_URL}${path}`, {
        method: "GET",
        headers: {
           'Content-Type': 'application/json',
           ...getHeaders()
        },
        next: {
            tags
        }    })
    if(!resp.ok) return false
    const responseJson = await resp.json()
    return responseJson
}

export const update = async (path : string , body : object) => {
    const resp = await fetch(`${BACKEND_URL}${path}`, {
        method: "PUT",
        body : JSON.stringify(body),
        headers: {
           'Content-Type': 'application/json',
           ...getHeaders()
        },
    })
    if(!resp.ok) return false
    const response = await resp.json()
    return response

}

export const post = async (path : string , data: FormData | object, additionHeader: object = {} ) => {
    const isFormData = data instanceof FormData
    const body = isFormData ? data : JSON.stringify(data);
    const resp = await fetch(`${BACKEND_URL}${path}`, {
        method: "POST",
        body : body,
        headers: {
            ...(additionHeader && {...additionHeader}),
           ...getHeaders(),
           ...(!isFormData ? { 'Content-Type': 'application/json' } : {'Content-Type': 'multipart/form-data; boundary=--------------------------151840689896304164188529'
})

        },
    })
    if(!resp.ok) return false
    const response = await resp.json()
    console.log(response)
    return response

}


export const remove = async (path : string) => {
    const resp = await fetch(`${BACKEND_URL}${path}`, {
        method: "DELETE",
        headers: {
           'Content-Type': 'application/json',
           ...getHeaders()
        },
    })
    if(!resp.ok) return false
    const response = await resp.json()
    return response

}

