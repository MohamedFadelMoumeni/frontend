import { LuLayoutDashboard } from "react-icons/lu";
import { MdSlowMotionVideo } from "react-icons/md";
import { TbDeviceAnalytics } from "react-icons/tb";
import { IoSettingsOutline } from "react-icons/io5";
import { BsCollectionPlay } from "react-icons/bs";





export const dashboardRoutes = [
    {
        id : 1,
        title : 'Dashboard',
        link : '/dashboard',
        icon : <LuLayoutDashboard  size={22}/>
    },
   
    {
        id : 2,
        title : 'Interactive Videos',
        link : '/dashboard/interactive-videos',
        icon : <MdSlowMotionVideo  size={22}/>
    },

    {
        id : 3,
        title : 'Analytics',
        link : '/dashboard/analytics',
        icon : <TbDeviceAnalytics  size={22}/>
    },
    {
        id : 4,
        title : 'Settings',
        link : '/dashboard/settings',
        icon : <IoSettingsOutline  size={22}/>
    },

]