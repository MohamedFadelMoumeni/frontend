import {
    DropdownMenu,
    DropdownMenuTrigger,
  } from "@/components/ui/dropdown-menu"
  import { HiOutlineSupport } from "react-icons/hi";


export const HelpDropdown = () => (
    <DropdownMenu >
  <DropdownMenuTrigger className=" hidden md:flex items-center gap-2 no-focus px-5 py-2 rounded-md border-[1px] border-gray-200 bg-white">
    <HiOutlineSupport size={20} />
    <span className="text-[14px]">Help Center</span>
  </DropdownMenuTrigger>
</DropdownMenu>
)

export default HelpDropdown
