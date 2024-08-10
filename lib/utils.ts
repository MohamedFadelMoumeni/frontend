import { UrlQueryType, RemoveQueryType } from "@/types";
import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"
import qs from 'query-string'

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function formatDate(date: string) {

  const d = new Date(date);

  const day = String(d.getDate()).padStart(2, '0');
  const month = String(d.getMonth() + 1).padStart(2, '0'); 
  const year = d.getFullYear();

  return `${day}-${month}-${year}`;
}

export function fromUrlQuery({params, key, value}:UrlQueryType){
  const currentQuerty = qs.parse(params)
  currentQuerty[key] = value
  return qs.stringifyUrl({
    url: window.location.pathname,
    query: currentQuerty,
  },
  {skipNull: true}
)
}

export function removeQueryFromUrl({params, keys}:RemoveQueryType){
  const currentQuerty = qs.parse(params)
  keys.forEach(key => delete currentQuerty[key])
  return qs.stringifyUrl({
    url: window.location.pathname,
    query: currentQuerty,
  },
  {skipNull: true}
)

}

export function bytesToMegabytes(bytes:number) {
  const megabytes = bytes / (1024 * 1024);
  return megabytes.toFixed(2);
}