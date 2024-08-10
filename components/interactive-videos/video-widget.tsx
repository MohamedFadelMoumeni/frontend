"use client"
import { Button } from '../ui/button'
import { IoCodeSlash } from "react-icons/io5";
import { useParams } from 'next/navigation';
import {
    Dialog,
    DialogContent,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
  } from "@/components/ui/dialog"
import CodeBlock from '../video-editing/code-block';

const scriptAndCss = `<script type="module" src="http://127.0.0.1:5500/playtok.js" crossorigin></script>
<link href="http://127.0.0.1:5500/playtok.css" rel="stylesheet"/>
`





const VideoWidget = () => {
   const params = useParams()
  const divTag = ` <div id="playtok-root" video-id=${params.id}></div>
`

  return (
    <Dialog >
    <div className='w-full rounded-lg bg-primary-linear p-5 flex items-center justify-between'>
    <h2 className='w-[70%] semibold-xl !leading-[2rem] text-white'>Installation Code
    </h2>
    <DialogTrigger>
       <Button className='semibold-13 bg-white text-black px-4 rounded-full gap-2' variant='ghost'>
        Code
        <IoCodeSlash size={18} />
        </Button>
       </DialogTrigger>
    </div>
    <DialogContent className='min-w-[50%] '>
    <DialogHeader className='mb-2'>
      <DialogTitle className='text-xl'>Add to Site</DialogTitle>
    </DialogHeader>
    <div className='w-full flex flex-col gap-4'>
        <div className='space-y-2'>
            <h3 className='semibold-16 text-primary'>1. First add the Ghost script to your website header.</h3>
            <p className='regular-13 text-gray-700'>You only do this once so ignore this step if you've already added it.
            </p>
            <CodeBlock code={scriptAndCss} />
        </div>
        <div className='space-y-2'>
            <h3 className='semibold-16 text-primary'>2. Add your widget to the pages you want it to display on.</h3>
            <p className='regular-13 text-gray-700'>You only do this once so ignore this step if you've already added it.
            </p>
            <CodeBlock code={divTag}  />
        </div>
       </div>
  </DialogContent>
    </Dialog>
  )
}

export default VideoWidget