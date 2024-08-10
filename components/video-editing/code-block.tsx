import React from 'react'
import { MdOutlineContentCopy } from "react-icons/md";
import {
    Tooltip,
    TooltipContent,
    TooltipProvider,
    TooltipTrigger,
  } from "@/components/ui/tooltip"
  import { CopyToClipboard } from 'react-copy-to-clipboard';


const CodeBlock = ({code}: {code : string}) => {
  return (
    <div className='rounded-lg py-5 px-2 relative bg-slate-400/10 '>
        <div className='absolute top-2 right-2 rounded-lg  cursor-pointer'>
            <TooltipProvider>
  <Tooltip delayDuration={100}>
    <TooltipTrigger> <CopyToClipboard text={code}><MdOutlineContentCopy /></CopyToClipboard> 
    </TooltipTrigger>
    <TooltipContent>
      <p>Copy</p>
    </TooltipContent>
  </Tooltip>
</TooltipProvider>
        </div>
        <pre className='text-sm'>
          <code>{code}</code>
        </pre>
    </div>
  )
}

export default CodeBlock