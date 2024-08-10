import {
    Card,
  } from "@/components/ui/card"
  import { VideoType } from "@/types"
  import Link from "next/link"
  import { MdDelete } from "react-icons/md";



const CardVideo = ({video} : {video : VideoType}) => {
    return (
        <Card className="w-full cursor-pointer h-[200px]">
      <Link href={`/dashboard/interactive-videos/${video._id}`}>
      <video className=" w-full max-h-[150px] object-cover" >
        <source  src={video.url} />
        </video>
        <div className="w-full py-3 px-3 bg-white flex items-center justify-between">
            <h3 className="text-[11px]">New Videor 1dd</h3>
        </div>
        </Link>
        </Card>
    )
  }

  export default CardVideo