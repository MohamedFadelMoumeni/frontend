import { RgbColor } from "react-colorful"
export type ButtonType = {
    id: string;
    text: string,
    link:string
}

type BgType = RgbColor & {a?:number}

export type ColorType = {
    textColor: string
    bgColor : BgType
    borderColor ?: string
}

export type VideoType = {
 _id : string;
 url:string;
 userId:string
 createdAt:string;
 buttons : ButtonType[]
 playbackId:string;
 title : string
 description : string;
} & ColorType

export type EventType = "external_link" | "video" | "close" | string



export type PlayBackType = {
    _id : string
    firstVideo:string
}

export type UserType = {
    _id : string;
    first_name : string
    last_name : string
    email : string
    phone_number? : string
    createdAt : string
}

export type PasswordData = {
    current_password : string
    new_password : string
}

export type UrlQueryType = {
    params : string;
    value : string;
    key : string
}
export type RemoveQueryType = {
    keys: string[];
    params: string;
}
export interface SearchParamsProps {
    searchParams: { [key: string]: string | undefined };
  }
export type VideoFilterType = {
    title? : string
}  
