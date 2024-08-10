import React from 'react'
import { CopyBlock, dracula } from 'react-code-blocks';
import CodeBlock from './code-block';
import VideoWidget from '../interactive-videos/video-widget';

const VideoSnippet = () => {
    const texts = `
   <script>!function(){document.addEventListener("DOMContentLoaded",()=>{const e=document.createElement("div");
   e.id="vendeo-app",document.body.appendChild(e);const t=document.createElement("script");t.src="https://db.vendeo.io/storage/v1/object/public/scripts/latest.js",t.async=1,t.type="module",document.body.appendChild(t),window.vendeo_flow_id="c6031821-97e3-4c88-b48d-87a0c6045282"})}();</script>
    `
  return (
    <div className="w-full flex flex-col gap-2">
        <h3 className='semibold-16'>Add to your site</h3>
        <div className='w-full overflow-hidden mt-2 '>
       <VideoWidget />
        </div>
    </div>
  )
}

export default VideoSnippet
