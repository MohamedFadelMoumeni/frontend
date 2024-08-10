'use client'
import React, { useState, ChangeEvent, useEffect } from 'react'
import { Input } from '../ui/input'
import { usePathname, useRouter, useSearchParams } from 'next/navigation'
import { fromUrlQuery, removeQueryFromUrl } from '@/lib/utils'

const VideoSearch = () => {

    const searchParams = useSearchParams()
    const query = searchParams.get('q')
    const router = useRouter()
    const [search, setSearch] = useState<string>(query || '')
    const handleSearch = (e : ChangeEvent<HTMLInputElement>) => {
        setSearch(e.target.value)
    }

    useEffect(() => {
     const debounceFn = setTimeout(() => {
      if(search.length > 0) {
        const newUrl = fromUrlQuery({
          params: searchParams.toString(),
          value: search,
          key :'q'
        })
        router.replace(newUrl, {scroll: false})
      }else {
        const newUrl = removeQueryFromUrl({
          params: searchParams.toString(),
          keys: ['q']
        })
        router.replace(newUrl, {scroll: false})
      }
     }, 500)
     return ()=> clearTimeout(debounceFn)
    }, [search, router, searchParams])

  return (
    <div className='flex items-center gap-2 w-full '>
    <Input value={search} onChange={handleSearch} type='text' className='w-full md:w-[180px] md:max-w-[200px] border-2 no-focus' placeholder='Search by title' />
  </div>
  )
}

export default VideoSearch